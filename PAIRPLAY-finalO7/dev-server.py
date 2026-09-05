#!/usr/bin/env python3
import argparse, errno, webbrowser
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parent

class PreviewHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate")
        super().end_headers()

    def send_head(self):
        for header in ("If-Modified-Since", "If-None-Match"):
            if header in self.headers:
                del self.headers[header]

        path = unquote(urlsplit(self.path).path)
        target = Path(self.translate_path(self.path)).resolve()

        if not target.is_relative_to(ROOT.resolve()):
            self.send_error(404, "Not found")
            return None

        original_path = self.path
        try:
            if target.is_file():
                return super().send_head()

            if not Path(path).suffix:
                self.path = "/index.html"
                return super().send_head()

            self.send_error(404, "Asset not found")
            return None
        finally:
            self.path = original_path

    def list_directory(self, path):
        self.send_error(404, "Directory listing disabled")
        return None

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--port", type=int, default=4180)
    args = parser.parse_args()

    handler = partial(PreviewHandler, directory=str(ROOT))

    server = None
    for port in range(args.port, args.port + 10):
        try:
            server = ThreadingHTTPServer(("127.0.0.1", port), handler)
            break
        except OSError as exc:
            if exc.errno != errno.EADDRINUSE:
                raise

    if server is None:
        print("All nearby ports are busy. Try: python3 dev-server.py --port 4280")
        return

    url = f"http://127.0.0.1:{server.server_port}/"
    print(f"Open this URL: {url}")
    webbrowser.open(url)

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")

if __name__ == "__main__":
    main()
