# Vesna 内置函数

[English](builtins.md) | [中文](builtins.zh-CN.md)

所有内置函数用 `#` 前缀，参数用 `;` 分隔。

```text
#up("hello"),           /* "HELLO" */
#split("a,b,c"; ","),   /* ["a"; "b"; "c"] */
```

---

## 字符串

| 函数 | 说明 |
|---|---|
| `#len(s)` | 长度 |
| `#up(s)` | 转大写 |
| `#down(s)` | 转小写 |
| `#title(s)` | 每个单词首字母大写 |
| `#capitalize(s)` | 首字母大写，其余小写 |
| `#trim(s)` | 去两边空白 |
| `#lstrip(s)` | 去左空白 |
| `#rstrip(s)` | 去右空白 |
| `#sub(s; start)` / `#sub(s; start; end)` | 子串，索引从 1 开始；省 end 截到结尾 |
| `#split(s; sep)` | 按分隔符切分 |
| `#join(list; sep)` | 拼接列表 |
| `#find(s; sub)` | 查找位置，找不到返回 0 |
| `#rfind(s; sub)` | 从右查找 |
| `#replace(s; old; new)` | 字面替换 |
| `#count(s; sub)` | 子串出现次数 |
| `#startswith(s; p)` | 是否以 p 开头 |
| `#endswith(s; p)` | 是否以 p 结尾 |
| `#repeat(s; n)` | 重复 n 次 |
| `#lines(s)` | 按行切分 |
| `#char_at(s; i)` | 第 i 个字符，从 1 开始 |
| `#ord(c)` | 字符 → 码 |
| `#chr(n)` | 码 → 字符 |

```text
#sub("Hello"; '1'; '3'),        /* "He" */
#sub("Hello"; '3'),          /* "llo" */
#find("Hello"; "l"),            /* 3 */
#replace("abc"; "b"; "X"),      /* "aXc" */
#char_at("Hello"; '1'),         /* "H" */
#ord("A"),                      /* 65 */
#chr('66'),                     /* "B" */
```

---

## 类型转换

| 函数 | 说明 |
|---|---|
| `#str(x)` | 转字符串 |
| `#int(x)` | 转整数 |
| `#float(x)` | 转浮点 |
| `#bool(x)` | 转布尔 |
| `#into(type; x)` | 通用转换 |

`#into` 的类型参数是**关键字**，不是字符串：

```text
#into(int; "42"),
#into(str; '5'),
#into(float; "3.14"),
#into(list; "abc"),
```

---

## 类型判断

| 函数 | 说明 |
|---|---|
| `#type(x)` | 返回类型名 |
| `#is_digit(c)` | 是否数字字符 |
| `#is_alpha(c)` | 是否字母 |
| `#is_alnum(c)` | 是否字母或数字 |
| `#is_space(c)` | 是否空白 |

```text
#type('5'),        /* "int" */
#type("a"),        /* "str" */
#type([1; 2]),     /* "list" */
```

---

## 列表

| 函数 | 说明 |
|---|---|
| `#len(a)` | 长度 |
| `#append(a; x)` | 追加元素 |
| `#pop(a)` | 弹出末尾 |
| `#sort(a)` | 排序（返回新列表） |
| `#reverse(a)` | 反转 |
| `#slice(a; start)` / `#slice(a; start; end)` | 切片；省 end 到结尾 |
| `#contains(a; x)` | 是否包含 |

```text
a = ['3'; '1'; '2'],
#sort(a),              /* ['1'; '2'; '3'] */
#contains(a; '2'),     /* true */
```

---

## 字典

| 函数 | 说明 |
|---|---|
| `#len(d)` | 键的数量 |
| `#keys(d)` | 键列表 |
| `#values(d)` | 值列表 |
| `#has_key(d; k)` | 是否包含键 |

```text
d = {"a": '1'; "b": '2'},
#keys(d),              /* ["a"; "b"] */
#has_key(d; "a"),      /* true */
```

---

## 数学

| 函数 | 说明 |
|---|---|
| `#min(a)` | 最小 |
| `#max(a)` | 最大 |
| `#sum(a)` | 求和 |
| `#abs(x)` | 绝对值 |
| `#round(x; n)` | 四舍五入，保留 n 位 |
| `#pow(a; b)` | 幂 |

```text
#min([3; 1; 4]),       /* 1 */
#max([3; 1; 4]),       /* 4 */
#sum([3; 1; 4]),       /* 8 */
#abs('-5'),            /* 5 */
#round('3.14159'; '2'),/* 3.14 */
#pow('2'; '10'),       /* 1024 */
```

---

## 正则

| 函数 | 说明 |
|---|---|
| `#match(s; pat)` | 是否匹配 |
| `#findall(s; pat)` | 提取所有匹配 |
| `#gsub(s; pat; repl)` | 替换 |
| `#search(s; pat)` | 搜索，返回分组 |

```text
#match("2026-09-12"; "\\d{4}"),       /* true */
#findall("a1 b2 c3"; "[a-z]"),        /* ["a"; "b"; "c"] */
#gsub("a1b2"; "[0-9]"; ""),           /* "ab" */
```

---

## 文件与目录

| 函数 | 说明 |
|---|---|
| `#fread(path)` | 读文件 |
| `#fwrite(path; text)` | 写文件 |
| `#fappend(path; text)` | 追加 |
| `#fexists(path)` | 文件是否存在 |
| `#ls(dir)` | 列目录 |
| `#glob(pat)` | 通配匹配 |
| `#rmdir(path)` | 递归删除目录（不存在时忽略） |

```text
#fread("data.txt"),
#fwrite("out.txt"; "hello\n"),
#fappend("log.txt"; "new line\n"),
#fexists("data.txt"),       /* true */
#ls("."),                   /* 文件列表 */
#glob("*.ves"),             /* 所有 .ves 文件 */
```

---

## 系统

| 函数 | 说明 |
|---|---|
| `#args()` | 命令行参数列表 |
| `#stdin()` | 读标准输入 |
| `#exit(code)` | 退出程序 |
| `#setenv(name; value)` | 设置用户环境变量（HKCU\Environment） |
| `#getenv(name)` | 读取进程环境变量 |
| `#regenv(name)` | 读取用户环境变量（HKCU\Environment） |
| `#regwrite(root; path; name; value)` | 写注册表值（root: HKLM / HKCU） |
| `#regdelete(root; path)` | 删除注册表键树（递归） |
| `#shell(cmd)` | 运行 shell 命令 |
| `#path_clean(p)` | 规范化路径 |
| `#cwd()` | 当前工作目录 |
| `#cpdir(src; dst)` | 递归复制目录 |

```text
args = #args(),
path = args['1'],
```

---

## 函数式

| 函数 | 说明 |
|---|---|
| `#map(list; "fn")` | 对每个元素调用 fn |
| `#filter(list; "fn")` | 保留 fn 返回真的元素 |
| `#reduce(list; "fn"; init)` | 归约 |

**函数名用字符串**：

```text
def is_error(line)-
-back(#match(line; "ERROR"))

errors = #filter(lines; "is_error"),
```

`#map` 和 `#filter` 的 `fn` 接受一个参数。`#reduce` 接受两个参数：累加器和当前元素。

```text
def add(a; b)-
-back(a + b)

total = #reduce(nums; "add"; '0'),
```

---

## 插值字符串

`#f"..."` 把字符串里的 `(var)` 替换为变量值：

```text
name = "Vesna",
age = '1',
print(#f"name=(name), age=(age)"),
/* 输出：name=Vesna, age=1 */
```

`(name)` 里只能是变量名，不能是表达式。

---


---

## 0.4 通用语言扩充

1.0.0 新增。`#rand`、`#randint`、`#choice`、`#shuffle`、`#now`、`#date`、`#sleep`、`#ticks`、`#platform`、`#temp_dir` 为非确定性或依赖环境；其余均为确定性函数。

### 进阶数学

| 函数 | 说明 |
|---|---|
| `#sqrt(x)` | 平方根 |
| `#floor(x)` / `#ceil(x)` | 向下 / 向上取整 |
| `#exp(x)` | e 的 x 次方 |
| `#log(x)` / `#log10(x)` | 自然 / 常用对数（x > 0） |
| `#sin(x)` / `#cos(x)` / `#tan(x)` | 三角函数（弧度） |
| `#sign(x)` | -1 / 0 / 1 |
| `#clamp(x; lo; hi)` | 夹取到 [lo; hi] |
| `#rand()` | [0; 1) 随机浮点数 |
| `#randint(a; b)` | [a; b] 随机整数 |
| `#choice(a)` | 列表随机取一个元素 |
| `#shuffle(a)` | 返回打乱后的副本 |

### 进制

| 函数 | 说明 |
|---|---|
| `#hex(n)` | 转十六进制（无前缀、小写） |
| `#bin(n)` | 转二进制 |
| `#oct(n)` | 转八进制 |

### 字符串

| 函数 | 说明 |
|---|---|
| `#pad(s; w; c)` | 用 c 将 s 居中补齐到宽度 w |
| `#lpad(s; w; c)` | 右对齐（左侧补齐） |
| `#rpad(s; w; c)` | 左对齐（右侧补齐） |
| `#format(fmt; ...)` | C 风格格式化：`%s` `%d` `%f` `%.2f` `%%` |
| `#hash(s)` | 确定性 FNV-1a 64 位哈希（十进制字符串） |

```text
#format("%s-%d-%.2f"; "v"; '42'; '3.14159'),  /* "v-42-3.14" */
#hash("hello"),                               /* 确定性 64 位数字 */
#lpad("ab"; '5'; "0"),                        /* "000ab" */
```

### 列表

| 函数 | 说明 |
|---|---|
| `#range(start; end; step)` | 整数序列 `[start; end)` |
| `#first(a)` / `#last(a)` | 首 / 尾元素（空则 none） |
| `#take(a; n)` / `#drop(a; n)` | 保留 / 去掉前 n 个 |
| `#set(a)` | 去重（保序） |
| `#flatten(a)` | 展开一层 |
| `#zip(a; b)` | 两两配对为组 |
| `#insert(a; i; x)` | 在 1 起始位置 i 插入 x，返回新列表 |
| `#remove(a; i)` | 删除 1 起始第 i 个元素，返回新列表 |
| `#index_of(a; x)` | 1 起始位置，找不到为 0 |
| `#enumerate(a)` | `[(i; v); ...]`，索引从 1 起 |
| `#concat(a; b)` | 拼接两个列表 |

```text
#range('1'; '5'),          /* ['1';'2';'3';'4'] */
#zip(['1';'2']; ["a";"b"]),/* [('1';a);('2';b)] */
#set(['1';'1';'2']),       /* ['1';'2'] */
```

### 字典

| 函数 | 说明 |
|---|---|
| `#get(d; k; default)` | 取键值，缺失返回 default（默认 none） |
| `#items(d)` | `[(k; v); ...]` |
| `#pop_key(d; k)` | 删除键并返回旧值（无则 none） |

### 类型判断

`#is_str` `#is_int` `#is_float` `#is_bool` `#is_list` `#is_dict` `#is_none` `#is_group`

### 时间 / 系统

| 函数 | 说明 |
|---|---|
| `#now()` | Unix 时间戳（int） |
| `#date(fmt)` | 本地时间格式化（默认 `%Y-%m-%d %H:%M:%S`） |
| `#date_format(ts; fmt)` | 格式化任意时间戳（默认 `%Y-%m-%d %H:%M:%S`） |
| `#parse_time(s; fmt)` | 把格式化字符串解析为时间戳（支持 `%Y %m %d %H %M %S`） |
| `#sleep(ms)` | 睡眠毫秒 |
| `#ticks()` | 自启动起单调毫秒数 |
| `#platform()` | `"windows"` / `"linux"` / `"mac"` |
| `#arch()` | `"x64"` / `"arm64"` / `"x86"` / `"unknown"` |
| `#temp_dir()` | 系统临时目录 |
| `#uuid()` | 随机 UUID v4 字符串（36 字符） |

### 文件

| 函数 | 说明 |
|---|---|
| `#fremove(path)` | 删除文件（不存在不报错） |
| `#fmove(src; dst)` | 移动文件 |
| `#fsize(path)` | 文件字节数 |
| `#file_time(path)` | 文件最后修改时间（unix 秒） |
| `#truncate(path; size)` | 将文件截断 / 扩展为 `size` 字节 |
| `#is_dir(path)` / `#is_file(path)` | 路径类型判断 |
| `#mkdirs(path)` | 递归创建目录 |
| `#mkdir(path)` | 创建单个目录 |
| `#copy(src; dst)` | 复制文件（源不存在报错） |
| `#rename(src; dst)` | 重命名 / 移动文件或目录 |
| `#chdir(path)` | 改变当前工作目录 |

### 编码

| 函数 | 说明 |
|---|---|
| `#base64_encode(s)` / `#base64_decode(s)` | base64 编解码 |
| `#url_encode(s)` / `#url_decode(s)` | URL 百分号编码（空格 → `+`） |

### 函数式

| 函数 | 说明 |
|---|---|
| `#each(list; "fn")` | 对每个元素执行副作用，返回原列表 |
| `#all(list; "fn")` | 全部为真？ |
| `#any(list; "fn")` | 任一为真？ |
| `#find_first(list; "fn")` | 第一个为真的元素（无则 none） |
| `#sort_by(list; "fn")` | 按 fn 键稳定排序 |

### 异常

| 函数 | 说明 |
|---|---|
| `#throw(msg)` | 抛出错误 |
| `#assert(cond; msg)` | 条件为假则抛出 |
## 1.1 并发 / 网络 / 二进制

### 并发

| 函数 | 说明 |
|---|---|
| `#thread("fn"; arg...)` | 在新线程中运行 `fn`（全局变量按副本隔离），返回线程 id（int） |
| `#thread_join(id)` | 等待线程结束并返回其 `back` 值；线程出错则重新抛出 |
| `#thread_count()` | 当前仍在运行（未 join）的线程数 |
| `#lock("name")` | 获取命名互斥锁（阻塞），首次使用自动创建 |
| `#unlock("name")` | 释放命名互斥锁；未锁定过则报错 |

说明：每个线程在独立的全局变量副本上运行（函数定义共享且只读）。共享文件 / 共享资源写入请用 `#lock`/`#unlock` 保护；`print` 输出已互斥。已 join 的线程会从表中移除；未 join 的线程在解释器退出时自动等待。

### 网络（需系统 PATH 中有 curl）

| 函数 | 说明 |
|---|---|
| `#http_get(url)` | GET 请求，返回响应体字符串 |
| `#http_post(url; body)` | POST 表单请求，返回响应体字符串 |
| `#tcp_ping(host; port)` | TCP 连通返回 `0`，拒绝/超时返回 `1`，错误返回 `-1` |
| `#http_server(port; "handler")` | 阻塞式 HTTP 服务；每请求调用 `handler(req)`，`req` 为 `{method; path; headers; body}`；handler 返回字符串（200）或 `{code; body; type}` |

### 二进制

| 函数 | 说明 |
|---|---|
| `#bin_read(path)` | 以字节列表（0-255 整数）读取文件 |
| `#bin_write(path; bytes)` | 将字节列表（每项 0-255）写入文件 |
| `#bin_hex(bytes)` | 字节 → 小写十六进制字符串 |
| `#bin_unhex(s)` | 十六进制字符串 → 字节列表（长度须为偶数） |
| `#bin_base64_encode(bytes)` | 字节 → base64 字符串 |
| `#bin_base64_decode(s)` | base64 字符串 → 字节列表 |

字节就是普通整数，现有列表操作（`#len`、`#slice`、`#append` 等）可直接用于二进制数据。
## 1.2 数据 / 加密 / 进程 / FFI

### 数据

| 函数 | 说明 |
|---|---|
| `#json_encode(v)` | 将任意值序列化为 JSON 字符串（dict 保持插入顺序） |
| `#json_decode(s)` | 解析 JSON 为 dict / list / int / float / string / bool / none；非法输入报错 |
| `#csv_parse(s)` | 解析 CSV 文本为行列表 `[[字段; ...]; ...]` |
| `#csv_build(rows)` | 行列表 → CSV 文本 |
| `#ini_read(path)` | 读取 INI 文件为 `{section: {key: value}}` |
| `#ini_write(path; data)` | 将 `{section: {key: value}}` 写入 INI 文件 |
| `#xml_parse(s)` | 解析 XML 文本为 `{tag; attrs; children; text}`（简易 DOM） |
| `#call(fname; arg...)` | 按函数名字符串动态调用 |
| `#re_groups(s; pattern)` | 返回首个正则匹配的捕获组列表：组 0 为整段匹配，未匹配组为 `none`；无匹配返回空列表 |

### 加密

| 函数 | 说明 |
|---|---|
| `#sha256(s)` | SHA-256 十六进制摘要（64 字符），已按 FIPS 180-4 向量验证；1.8.0 起也接受字节列表（`#sha256(#bin_read(path))` 做真实文件哈希） |
| `#aes_encrypt(data; key)` | AES-256-CBC + PKCS7，密钥经 SHA-256 派生，返回 base64（已按 FIPS-197 验证） |
| `#aes_decrypt(b64; key)` | 用相同密钥解密 `#aes_encrypt` 产生的 base64 密文 |

说明：AES 采用固定全零 IV 与 SHA-256 派生密钥——适合本地工具与静态数据加密，不作为高安全通道中认证加密的替代。

### 进程

| 函数 | 说明 |
|---|---|
| `#proc_run(cmd)` | 运行命令，返回 dict `{"exit": 退出码; "output": 捕获的 stdout}` |

### FFI（Windows x64；Linux/macOS 经 dlopen）

| 函数 | 说明 |
|---|---|
| `#ffi_call("dll"; "func"; arg...)` | 加载共享库并调用 C 函数；参数支持 int / 字符串（字符串以 `char*` 传入），最多 6 个；返回 64 位整数结果 |
| `#ffi_call_s("dll"; "func"; arg...)` | 同 `#ffi_call`，返回字符串（函数返回 `char*`） |

示例：`#ffi_call("kernel32.dll"; "GetTickCount")`、`#ffi_call("kernel32.dll"; "GetModuleHandleA"; "kernel32.dll")`。


## 1.9 网络 / 文件加解密

### TCP 套接字（原生）

| 函数 | 说明 |
|---|---|
| `#tcp_connect(host; port)` | 连接 TCP 服务器，返回套接字句柄（整数） |
| `#tcp_listen(port)` | 在端口上 bind + listen，返回监听句柄（整数） |
| `#tcp_accept(srv)` | 在监听句柄上阻塞接受连接，返回客户端句柄（整数） |
| `#tcp_send(sock; data)` | 把字符串完整发送到套接字，返回已发送字节数（整数） |
| `#tcp_recv(sock; maxlen)` | 接收至多 `maxlen` 字节并以字符串返回；对端关闭时返回空串 |
| `#tcp_close(sock)` | 关闭套接字 |

回显服务示例：

```
srv = #tcp_listen('9000'),
cli = #tcp_accept(srv),
msg = #tcp_recv(cli; '4096'),
#tcp_send(cli; "echo: " + msg),
#tcp_close(cli),
#tcp_close(srv),
```

句柄就是普通整数，可存进列表/字典，也可跨 `#thread` 线程传递。


### UDP 套接字（原生）

| 函数 | 说明 |
|---|---|
| `#udp_open(port)` | 创建 UDP 套接字并绑定端口，返回句柄；`port` 传 `'0'` 使用随机端口 |
| `#udp_send(handle; host; port; data)` | 向 `host:port` 发送 UDP 数据报，返回发送字节数 |
| `#udp_recv(handle; maxlen; timeout_ms)` | 接收数据报并以字符串返回；第三参数为超时毫秒（缺省阻塞），超时返回空串 |
| `#udp_close(handle)` | 关闭 UDP 套接字 |

### DNS 查询

| 函数 | 说明 |
|---|---|
| `#dns_lookup(host)` | 解析主机名，返回 IP 地址字符串列表 |

UDP 与 TCP 一样使用整数句柄，可跨 `#thread` 传递。示例（本机回环）：

```
a = #udp_open('9001'),
#udp_send(a; "127.0.0.1"; '9001'; "hello"),
msg = #udp_recv(a; '100'; '1000'),
```

### 并发：线程 ID 与信号量（2.4）

| 函数 | 说明 |
|---|---|
| `#thread_id()` | 返回当前线程 ID（跨平台稳定整数） |
| `#sem_open(value)` | 创建计数信号量并返回句柄；`value` 为初值（缺省 `'1'`） |
| `#sem_wait(sem)` | 阻塞 P 操作：计数减 1，为 0 时阻塞等待 |
| `#sem_post(sem)` | 非阻塞 V 操作：计数加 1，唤醒等待线程 |
| `#sem_close(sem)` | 销毁信号量 |

信号量句柄是普通整数，可跨 `#thread` 传递，用于线程间同步（生产者—消费者）。示例：

```text
sem = #sem_open('0'),
def worker()-
-#sem_wait(sem),
-print("worker 放行"),
#thread(worker),
#sleep('100'),
#sem_post(sem),
#sem_close(sem),
```

### 数据校验：CRC32 与 Adler-32（2.4）

| 函数 | 说明 |
|---|---|
| `#crc32(data)` | 计算 CRC32（IEEE 802.3）校验和，返回 8 位十六进制字符串；接受字符串或字节列表 |
| `#adler32(data)` | 计算 Adler-32（RFC 1950）校验和，返回 8 位十六进制字符串；接受字符串或字节列表 |

与 `#sha256` 相同，传字节列表（如 `#bin_read(path)` 的结果）即可对真实文件字节做校验。

### 文件 / 文件夹加解密（AES-256-CBC，原地操作）

| 函数 | 说明 |
|---|---|
| `#encrypt_file(path; key)` | 原地加密文件；内容替换为 base64 密文；返回 `true` |
| `#decrypt_file(path; key)` | 还原 `#encrypt_file` 加密的文件；密钥错误或非 Vesna 密文会报错；返回 `true` |
| `#encrypt_dir(dir; key)` | 递归原地加密目录下所有文件，返回处理文件数 |
| `#decrypt_dir(dir; key)` | 递归还原 `#encrypt_dir` 加密的文件，返回还原文件数 |

说明：密钥经 SHA-256 派生（与 `#aes_encrypt` 一致）；密文带 `VSENC1` 魔数前缀，错误密钥解密会被识别。操作为原地覆盖——批量执行前如需可先备份。


### 文件遍历 / 哈希 / 下载 / 版本 / 磁盘 / 随机串 / URL / 剪贴板（2.6）

| 函数 | 说明 |
|---|---|
| `#dir_walk(dir)` | 递归列出目录下全部文件路径（跳过权限拒绝的目录） |
| `#hash_file(path; alg)` | 计算文件哈希（`sha256`/`crc32`/`adler32`），返回十六进制字符串；用于大文件校验与包完整性 |
| `#download(url; path)` | HTTP GET 下载到本地文件，返回是否成功；配合 `#hash_file` 做下载校验 |
| `#version()` | 返回 Vesna 版本字符串（与 `--version` 一致） |
| `#disk_free(path)` | 返回路径所在磁盘剩余字节数（Windows `GetDiskFreeSpaceExW` / POSIX `statvfs`） |
| `#rand_str(n)` | 生成 n 位随机字母数字字符串 |
| `#url_parse(url)` | 解析 URL 为 `{scheme; host; port; path; query}`（剥离 userinfo，缺省端口 https=443 / http=80） |
| `#clip_get()` | 读取剪贴板文本（POSIX 返回 `none`） |
| `#clip_set(s)` | 设置剪贴板文本，返回是否成功（POSIX 返回 `false`） |
| `#readline()` | 从 stdin 读取一行（EOF 返回空串） |

这些内置为文件批处理、包下载校验、脚本自动化提供通用能力；`#dir_walk` / `#hash_file` 已被 `vesna-dev`、vpm 等工具复用。

## 完整例子

```text
import json,

args = #args(),
path = args['1'],

if not #fexists(path)-
-print("找不到文件: " + path),
-#exit('1'),

content = #fread(path),
lines = #lines(content),

def is_error(line)-
-back(#match(line; "ERROR"))

errors = #filter(lines; "is_error"),

result = {
    "file": path;
    "total": #len(lines);
    "errors": #len(errors)
},

print(json_write(result)),
```
