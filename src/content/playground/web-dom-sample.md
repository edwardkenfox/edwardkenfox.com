+++
date = "2019-10-14T10:16:38+09:00"
title = "web-dom sample"

+++

<script src="https://unpkg.com/web-dom@latest/web-dom.min.js"></script>

Sample of using [web-dom](https://github.com/web-dom/web-dom). The below h1 tag is generated and inserted from the wasm module served as a sub-resource of this html. You can see that the `web-dom` Custom Element loads the wasm module and then inserts the h1 tag within itself.

<web-dom module="/static/web-dom-sample/web_dom_sample.wasm"></web-dom>

source code

```toml
// Cargo.toml
[package]
name = "web-dom-sample"
version = "0.1.0"
authors = ["Edward Fox <edwardkenfox@gmail.com>"]
edition = "2018"

[lib]
crate-type =["cdylib"]

[dependencies]
web-dom = "0.1"
```

```rust
// lib.rs
use web_dom::*;

#[no_mangle]
pub fn main() -> () {
    let h1 = document::create_element(document(), "h1");
    element::set_id(h1, "web-dom-sample");
    element::insert_adjacent_text(h1, "afterBegin", "Hello from web assembly!");

    let target = document::query_selector(document(), "web-dom");
    element::append(target, h1);
}
```

```sh
# install complie target
rustup target add wasm32-unknown-unknown

# build & run
cargo build --target wasm32-unknown-unknown --release
```
