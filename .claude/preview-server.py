"""Local preview server for the static site.

Plain `python3 -m http.server` fails on macOS when the launching process may not
read its own working directory (os.getcwd() -> PermissionError), so the document
root is derived from this file's own path instead and never from the cwd.
"""
import functools
import http.server
import os
import socketserver
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8777


class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def log_message(self, fmt, *args):
        sys.stdout.write("%s - %s\n" % (self.address_string(), fmt % args))
        sys.stdout.flush()


class Server(socketserver.ThreadingTCPServer):
    allow_reuse_address = True
    daemon_threads = True


if __name__ == "__main__":
    handler = functools.partial(Handler, directory=ROOT)
    with Server(("127.0.0.1", PORT), handler) as httpd:
        print("serving %s at http://127.0.0.1:%d/" % (ROOT, PORT))
        sys.stdout.flush()
        httpd.serve_forever()
