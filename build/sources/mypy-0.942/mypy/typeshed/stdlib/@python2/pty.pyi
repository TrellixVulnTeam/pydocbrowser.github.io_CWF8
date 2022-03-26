import sys
from typing import Callable, Iterable, Tuple

if sys.platform != "win32":
    _Reader = Callable[[int], bytes]

    STDIN_FILENO: int
    STDOUT_FILENO: int
    STDERR_FILENO: int

    CHILD: int
    def openpty() -> Tuple[int, int]: ...
    def master_open() -> Tuple[int, str]: ...
    def slave_open(tty_name: str) -> int: ...
    def fork() -> Tuple[int, int]: ...
    def spawn(argv: str | Iterable[str], master_read: _Reader = ..., stdin_read: _Reader = ...) -> None: ...