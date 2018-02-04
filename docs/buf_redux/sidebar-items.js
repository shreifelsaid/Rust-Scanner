initSidebarItems({"fn":[["copy_buf","Copy data between a `BufRead` and a `Write` without an intermediate buffer."]],"mod":[["strategy","Types which can be used to tune the behavior of `BufReader`."]],"struct":[["BufReader","A drop-in replacement for `std::io::BufReader` with more functionality."],["BufWriter","A drop-in replacement for `std::io::BufWriter` with more functionality."],["Buffer","A deque-like datastructure for managing bytes."],["IntoInnerError","The error type for `BufWriter::into_inner()`, contains the `BufWriter` as well as the error that occurred."],["LineWriter","A drop-in replacement for `std::io::LineWriter` with more functionality."],["Unbuffer","A `Read` adapter for a consumed `BufReader` which will empty bytes from the buffer before reading from `inner` directly. Frees the buffer when it has been emptied. "]],"trait":[["TrustRead","A trait which `Buffer` can use to determine whether or not it is safe to elide zeroing of its buffer."]]});