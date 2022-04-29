import socket
from typing import Any, BinaryIO, Pattern, Text, overload

_LongResp = tuple[bytes, list[bytes], int]

class error_proto(Exception): ...

POP3_PORT: int
POP3_SSL_PORT: int
CR: bytes
LF: bytes
CRLF: bytes

class POP3:
    host: Text
    port: int
    sock: socket.socket
    file: BinaryIO
    welcome: bytes
    def __init__(self, host: Text, port: int = ..., timeout: float = ...) -> None: ...
    def getwelcome(self) -> bytes: ...
    def set_debuglevel(self, level: int) -> None: ...
    def user(self, user: Text) -> bytes: ...
    def pass_(self, pswd: Text) -> bytes: ...
    def stat(self) -> tuple[int, int]: ...
    def list(self, which: Any | None = ...) -> _LongResp: ...
    def retr(self, which: Any) -> _LongResp: ...
    def dele(self, which: Any) -> bytes: ...
    def noop(self) -> bytes: ...
    def rset(self) -> bytes: ...
    def quit(self) -> bytes: ...
    def close(self) -> None: ...
    def rpop(self, user: Text) -> bytes: ...
    timestamp: Pattern[Text]
    def apop(self, user: Text, secret: Text) -> bytes: ...
    def top(self, which: Any, howmuch: int) -> _LongResp: ...
    @overload
    def uidl(self) -> _LongResp: ...
    @overload
    def uidl(self, which: Any) -> bytes: ...

class POP3_SSL(POP3):
    def __init__(
        self, host: Text, port: int = ..., keyfile: Text | None = ..., certfile: Text | None = ..., timeout: float = ...
    ) -> None: ...