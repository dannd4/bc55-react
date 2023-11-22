# React

- [https://react.dev/](https://react.dev/)
- React là một thư viện Javascript để xây dựng giao diện người dùng.
- React hỗ trợ xây dựng trang web theo hướng single page application (SPA)
- VSCode extensions:
  - [https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
  - [https://marketplace.visualstudio.com/items?itemName=riazxrazor.html-to-jsx](https://marketplace.visualstudio.com/items?itemName=riazxrazor.html-to-jsx)
- Browser extensions:
  - [https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

### Create-react-app

- [https://create-react-app.dev/](https://create-react-app.dev/)
- Cài đặt: npx create-react-app project-name
- CRA cung cấp bộ công cụ khởi tạo ứng dụng React, vì vậy bạn có thể đi vào xây dựng ứng dụng của mình mà không cần phải xử lý các cấu hình Webpack và Babel.

### Component

- React cho phép bạn xây dựng giao diện người dùng (UI) từ các phần riêng lẻ được gọi là `Component`.
- Một component là một phần của giao diện người dùng mà bạn có thể tái sử dụng và tạo thành cấu trúc phức tạp bằng cách kết hợp nhiều component nhỏ hơn lại với nhau. Component giúp tách biệt các khía cạnh khác nhau của giao diện người dùng thành các phần độc lập, dễ quản lý và dễ bảo trì.
- Ví dụ, bạn có thể tạo các component như "Header", "Sidebar", "Content", "Footer",... Mỗi component này có thể chứa các phần tử HTML, các trạng thái, xử lý sự kiện và cách hiển thị riêng biệt. Sau đó kết hợp chúng lại để tạo nên giao diện tổng thể của trang web.

```jsx
function Home() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
}
```

### JSX

- JSX (JavaScript XML) là một phần quan trọng và độc đáo của React, cho phép bạn viết mã HTML trong JavaScript để xây dựng giao diện người dùng của ứng dụng. JSX giúp làm cho việc tạo ra các component và giao diện người dùng trở nên dễ dàng hơn.
- JSX cho phép viết các phần tử HTML bằng JavaScript và đặt chúng trong DOM mà không cần bất kỳ phương thức như createElement() hoặc appendChild().

```jsx
function App() {
  return (
    <section>
      <h1>Hello BC55</h1>
    </section>
  );
}
```

- Vì JSX là một phần của Javascript nên nó sử dụng chuẩn quy tắc đặt tên camelCase cho thuộc tính thay vì dùng tên thuộc tính gốc của HTML. Đối với các thuộc tính HTML bị trùng tên với từ khóa JavaScript sẽ được đổi tên. Ví dụ: class -> className, for -> htmlFor

```jsx
<h1 className="title">Hello World!!!<div>

<label htmlFor="username">Username</label>
<input type="text" id="username" />
```

- Dấu ngoặc nhọn {} cho phép bạn viết các biểu thức JavaScript bên trong JSX

```jsx
function Profile() {
  const user = { name: "Alice", imgUrl: "..." };
  return (
    <div>
      <h1>{user.name}</h1>
      <img className="avatar" src={user.imageUrl} />
    </div>
  );
}
```

- Trong JSX, bạn phải bao bọc tất cả các phần tử trong một phần tử cha duy nhất.
- Có thể sử dụng thẻ Fragment để bao bọc các phần tử con mà không cần thêm thẻ div.

```jsx
// Đúng
<div>
  <h1>Hello World!!!</h1>
  <h1>Hello World!!!</h1>
</div>

// Đúng
<>
  <h1>Hello World!!!</h1>
  <h1>Hello World!!!</h1>
</>

// Sai
<h1>Hello World!!!</h1>
<h2>Hello World!!!</h2>
```

### Events

- React cho phép bạn thêm các trình xử lý sự kiện (Event handlers) vào JSX.
- Các trình xử lý sự kiện trong React được đặt tên bằng camelCase. Ví dụ: onClick, onChange, onSubmit,...
- Các hàm chức năng chỉ được truyền vào trình xử lý sự kiện, không được gọi.

```jsx
<button onClick={handleClick}>
  Clicker
</button>

<input onChange={handleChange}>
```

- Trong trường hợp nếu hàm chức năng cần nhận vào tham số, ta viết dạng nội tuyến bằng cách sử dụng arrow function.

```jsx
const showMessage = (message) => {
  alert(message);
};

return <button onClick={() => showMessage("Hello BC55")}>Show Message</button>;
```

- Tất cả sự kiện đều nhận được một đối số là event, nó là một đối tượng có các thuộc tính và phương thức giúp xử lý sự kiện. Quan trọng nhất là `event.target` là một tham chiếu đến phần tử DOM mà sự kiện được gọi.

```jsx
const handleChange = (event) => {
  console.log(event.target.value);
};

return <input onChange={handleChange} />;
```

### Conditional rendering

- Conditional rendering trong React là quá trình hiển thị các phần giao diện người dùng khác nhau dựa trên điều kiện nào đó. Điều này cho phép bạn quyết định xem phần nào của giao diện nên được hiển thị dựa trên trạng thái hoặc dữ liệu của ứng dụng.

- Sử dụng if else

```jsx
function App() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return (
      <div>
        <h1>Welcome back</h1>
        <button>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Please login</h1>
      <button>Login</button>
    </div>
  );
}
```

- Sử dụng toán tử 3 ngôi

```jsx
function App() {
  const isLoggedIn = true;

  return (
    <div>{isLoggedIn ? <button>Logout</button> : <button>Login</button>}</div>
  );
}
```

- Sử dụng &&

```jsx
function App() {
  const isLoggedIn = true;
  return (
    <div>
      {isLoggedIn && <button>Logout</button>}
      {!isLoggedIn && <button>Login</button>}
    </div>
  );
}
```

### List and keys

- List là một tính năng cho phép bạn hiển thị danh sách các phần tử tương tự nhau trong một cấu trúc dữ liệu. Ví dụ: danh sách các bài viết, danh sách các sản phẩm, danh sách các người dùng,...
- Dùng phương thức map để chuyển đổi mảng dữ liệu của bạn thành một mảng các phần tử JSX hoặc Component.

```jsx
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

function App() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

- Cần cung cấp thuộc tính key cho mỗi phần tử trong mảng để React có thể xác định xem phần tử nào đã thay đổi, thêm hoặc xóa. Nếu không có key, React sẽ cảnh báo trong console.
- Giá trị của key phải là một chuỗi hoặc số xác định duy nhất cho mỗi phần tử trong mảng.

### Event

- React cho phép bạn thêm các trình xử lý sự kiện (Event handlers) vào JSX.
- Các trình xử lý sự kiện trong React được đặt tên bằng camelCase. Ví dụ: onclick -> onClick, onchange -> onChange
- Các hàm chức năng được chỉ được truyền vào trình xử lý sự kiện, không được gọi.

```jsx
<button onClick={handleClick}>
  Clicker
</button>

<input onChange={handleChange}>
```

- Tất cả sự kiện đều nhận được một đối số là event, nó là một đối tượng có các thuộc tính và phương thức giúp xử lý sự kiện. Quan trọng nhất là event.target là một tham chiếu đến phần tử DOM mà sự kiện được gọi.

```jsx
const handleChange = (event) => {
  console.log(event.target.value);
};

return <input onChange={handleChange} />;
```

- Để truyền tham số vào cho các hàm xử lý sự kiện, ta viết dạng nội tuyến bằng cách sử dụng arrow function

```jsx
const showMessage = (message) => {
  alert(message);
};

return <button onClick={() => showMessage("Hello BC42")}>Show Message</button>;
```

### Props

- Các component trong React sử dụng props để giao tiếp với nhau.
- Props là một đối tượng (object) chứa các thuộc tính (properties) được truyền từ một component cha (parent component) đến một component con (child component). Các props này có thể là bất kỳ giá trị nào, từ kiểu dữ liệu đơn giản như chuỗi (string) hoặc số (number), cho đến các đối tượng phức tạp hơn.

```jsx
// Truyền props cho component con
function App() {
  return <Welcome name="John" age={30} />;
}

// Nhận props trong component con
function Welcome(props) {
  return (
    <div>
      My name is {props.name} and I am {props.age} years old.
    </div>
  );
}
```

- Ngoài ra bởi vì props là một object, nên ta có thể sử dụng object destructuring để lấy các thuộc tính cần thiết

```jsx
function Welcome({ name, age }) {
  return (
    <div>
      My name is {name} and I am {age} years old.
    </div>
  );
}
```

- Trong React, bạn có thể truyền một hàm (function) làm prop cho một component. Khi một component nhận được một hàm làm prop, nó có thể gọi hàm đó và truyền các tham số vào để thực hiện các hành động cụ thể.

  - Giúp gọi tới hàm xử lý của component cha khi một sự kiện xảy ra trong component con.
  - Giúp truyền dữ liệu từ component con lên component cha.

```jsx
// Truyền hàm xử lý sự kiện cho component con
function App() {
  const handleShowMessage = (message) => {
    alert(message);
  };
  return <Welcome onShowMessage={handleShowMessage} />;
}

// Nhận hàm xử lý sự kiện trong component con
function Welcome({ onShowMessage }) {
  const handleClick = () => {
    onShowMessage("Hello");
  };
  return <button onClick={handleClick}>Show message</button>;
}
```

- Trong React, prop children là một prop đặc biệt cho phép truyền các thành phần (components) hoặc các phần tử (elements) làm con của một component.

```jsx
function ParentComponent() {
  return (
    <ChildComponent>
      <h1>Hello</h1>
      <p>This is a child component.</p>
    </ChildComponent>
  );
}

function ChildComponent(props) {
  return (
    <div>
      <h2>Child Component</h2>
      {props.children}
    </div>
  );
}
```

- Một số lưu ý:
  - Props là chỉ đọc (read-only), không thể thay đổi giá trị của props trong component con.
  - Nếu một component nhận được một prop không được truyền vào, giá trị của prop đó sẽ là undefined. Để tránh việc này, ta có thể khai báo giá trị mặc định cho prop bằng cách sử dụng cú pháp sau: `function Welcome({ name = "John" })`

### State

- Một số nội dung trên màn hình sẽ cập nhật theo tương tác của người dùng. Ví dụ như khi người dùng click vào button "Show" sẽ hiển thị nội dung ẩn, khi click vào button "Buy" sẽ đưa sản phẩm vào giỏ hàng,...Component cần lưu trữ trạng thái của nó để biết được nội dung hiển thị là gì, sản phẩm nào đã được thêm vào giỏ hàng. Trong React dữ liệu để lưu trữ trạng thái của component được gọi là State.
- Thuật ngữ:
  - render: là quá trình component tạo các thành phần UI.
  - re-render: là quá trình component được chạy lại để tạo lại các thành phần UI.

##### Khai báo một biến bình thường trong component là không đủ

- Component Couter khởi tạo một biến count với giá trị là 0, nhấn vào nút Increment sẽ thay đổi giá trị của count bằng cách tăng lên một đơn vị. Tuy nhiên giao diện sẽ không hiển thị giá trị của count thay đổi.
  - Các thay đổi đối với biến cục bộ sẽ không kích hoạt re-render, nghĩa là khi nhấn vào nút Increment, giá trị của count sẽ được tăng lên một đơn vị nhưng không có gì thay đổi trên giao diện.
  - Các biến cục bộ không được chia sẻ giữa các lần re-render, nghĩa là mỗi lần render, biến count sẽ được khởi tạo lại về giá trị 0.

```jsx
function Counter() {
  let count = 0;
  const handleIncrement = () => {
    count++;
    console.log(count);
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
```

##### Để cập nhật một component với dữ liệu mới, hai điều cần phải xảy ra:

- Dữ liệu được giữ lại giữa các lần render.
- Kích hoạt để component được re-render lại với dữ liệu mới.

##### Hook `useState`

- `useState` là một React Hook cung cấp cho chúng ta hai điều trên:

  - Một biến trạng thái (state) để giữ lại dữ liệu giữa các lần render.
  - Một hàm setter để cập nhật giá trị của state và kích hoạt re-render lại component.

- Cú pháp: `const [count, setCount] = useState(0)`. useState nhận vào một tham số là giá trị khởi tạo của state, và trả về một mảng gồm 2 phần tử: giá trị của state và hàm setter để cập nhật giá trị của state. Cú pháp [count, setCount] được gọi là array destructuring, cho phép đọc giá trị của mảng theo thứ tự.

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
```

- Một số quy tắc khi sử dụng hooks:
  - Chỉ gọi hooks từ React function component. Không được gọi hooks từ các hàm bình thường.
  - Chỉ gọi hooks ở cấp độ cao nhất của component. Không được gọi hooks trong các vòng lặp, các hàm con hay các hàm xử lý sự kiện.

### State vs Props

| State                                                              | Props                                                                      |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| State được sử dụng để lưu trữ và quản lý trạng thái của component. | Props được sử dụng để truyền dữ liệu giữa các component                    |
| State được tạo và quản lý bởi component thông qua hook `useState`  | Props được truyền vào component thông qua thuộc tính                       |
| State chỉ có thể được thay đổi bởi component tạo ra nó             | Props là chỉ đọc, không thể thay đổi giá trị của props trong component con |
| State thay đổi sẽ gây ra việc render lại component                 | Props thay đổi sẽ gây ra việc render lại component                         |

### Re-rendering

- Một component sẽ kích hoạt việc hiển thị lại (re-render) khi:

  - Khi state của component thay đổi bằng cách gọi hàm setter được trả về từ hook useState.
  - Khi props của component thay đổi do component cha truyền vào giá trị mới.
  - Khi component cha re-render, tất cả các component con cũng sẽ re-render, bất kể props của chúng có thay đổi hay không.

### Effect

- Một số component cần tương tác với các hệ thống bên ngoài React. Ví dụ khi một component được hiển thị ta muốn gọi API để lấy dữ liệu từ server, thao tác với DOM,... Những hành động này được gọi là side effect (hiệu ứng phụ).

- Trước khi nói về Effect, ta cần nhớ lại hai khái nhiệm trong component:

  - Rendering: là quá trình bạn sử dụng props và state và trả về JSX để hiển thị giao diện người dùng. Quá trình này chỉ đơn thuần tính toán và trả về kết quả mà không làm gì khác.
  - Event handlers: là quá trình bạn viết các hàm để xử lý các hành động do người dùng gây ra (ví dụ nhấp chuột, nhập liệu,...). Xử lý sự kiện có thể đơn thuần là cập nhật một input hoặc có thể chứa các side effect như gọi API mua hàng.

- Đôi khi 2 điều trên là không đủ, bạn hãy xem xét trường hợp một component `ChatRoom` khi được hiển thị, nó phải gọi API lấy những tin nhắn cũ và hiển thị ra cho người dùng thấy. Việc gọi API như đã đề cập ở trên là một side effect (không thuộc về React) vì vậy nó không thể xảy ra trong quá trình render. Tuy nhiên cũng không có một sự kiện cụ thể vào như là nhấp chuột để gây ra việc hiển thị những tin nhắn.

- Effect là cơ chế cho phép bạn thực hiện các side effect được gây ra bởi quá trình component hiển thị mà không cần thông qua một sự kiện cụ thể.
  - Gửi tin nhắn trong cuộc trò chuyện là một sự kiện vì nó được gây ra trực tiếp bởi người dùng nhấp chuột vào nút "Gửi".
  - Tuy nhiên việc thiết lập hiển thị tin nhắn là một "Effect" vì nó không được gây ra bởi người dùng mà là do quá trình hiển thị component `ChatRoom`.

##### Hook useEffect

- React cung cấp hook `useEffect` để tạo ra các Effect trong component.
- Cú pháp: `useEffect(callback, dependencies)`

  - Tham số thứ nhất là một callback function chứa các side effect.
  - Tham số thứ hai là một mảng chứa các giá trị phụ thuộc (dependencies).

- Dựa vào tham số thứ 2 của useEffect mà ta sẽ chia ra làm 3 trường hợp sử dụng:

  - `useEffect(callback, [])` với phụ thuộc là một mảng rỗng, thì useEffect sẽ chỉ gọi hàm `callback` một lần duy nhất sau khi component render lần đầu. Thường được sử dụng để thực hiện các tác vụ như lấy dữ liệu từ API.

  ```jsx
  function MyComponent() {
    // Khai báo biến trạng thái cho dữ liệu được lấy từ API
    const [data, setData] = useState([]);

    // Định nghĩa hàm fetchData để gọi API
    async function fetchData() {
      // Gọi API
      const response = await axios.get(`https://example.com/api`);
      // Cập nhật biến trạng thái data với dữ liệu mới
      setData(response.data);
    }

    // Sử dụng hook useEffect để gọi hàm fetchData khi component được khởi tạo
    useEffect(() => {
      // Gọi hàm fetchData
      fetchData();
    }, []);

    // Hiển thị giao diện cho component
    return (
      <div>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  ```

  - `useEffect(callback, [a, b])` với phụ thuộc là một mảng chứa nhiều giá trị, thì useEffect sẽ gọi hàm `callback` sau khi component render lần đầu và sau các lần render tiếp theo nếu một trong các giá trị trong mảng thay đổi. Thường được sử dụng để đọc giá trị mới thay đổi của state hoặc prop và thực hiện các tác vụ phụ thuộc vào giá trị đó.

    - Ví dụ: khi giá trị của state searchTerm thay đổi, ta cần lấy dữ liệu mới từ API.

    ```jsx
    function MyComponent() {
      // Khai báo biến trạng thái cho giá trị searchTerm
      const [searchTerm, setSearchTerm] = useState("");

      // Khai báo biến trạng thái cho dữ liệu được lấy từ API
      const [data, setData] = useState([]);

      // Định nghĩa hàm fetchData để gọi API với giá trị searchTerm
      async function fetchData() {
        // Gọi API với giá trị searchTerm
        const response = await axios.get(
          `https://example.com/api?search=${searchTerm}`
        );
        // Cập nhật biến trạng thái data với dữ liệu mới
        setData(response.data);
      }

      // Sử dụng hook useEffect để gọi hàm fetchData khi giá trị searchTerm thay đổi
      useEffect(() => {
        // Gọi hàm fetchData
        fetchData();
      }, [searchTerm]);

      // Hiển thị giao diện cho component
      return (
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      );
    }
    ```

    - Ví dụ: Theo dõi giá trị của props để thực hiện một hành động nào đó

    ```jsx
    function MyComponent({ name }) {
      // Sử dụng hook useEffect để theo dõi giá trị của props name
      useEffect(() => {
        alert(`Giá trị mới của prop name: ${name}`);
      }, [name]);

      return <div>MyComponent</div>;
    }
    ```

  - `useEffect(callback)` với mảng phụ thuộc không dược khai báo, thì useEffect sẽ gọi hàm `callback` mỗi khi component render. Trường hợp này không được khuyến khích sử dụng vì có thể gây ra các vấn đề về hiệu suất hoặc vòng lặp vô hạn nếu bạn không cẩn thận. Vì vậy, bạn nên truyền một mảng phụ thuộc là array rỗng hoặc array chứa các giá trị mà bạn muốn hàm callback của useEffect chạy lại khi chúng thay đổi.

### Refs

- Refs là một cơ chế cho phép bạn lưu trữ dữ liệu cho component nhưng không muốn việc thay đổi nó gây ra việc re-render.
- Một số ứng dụng của refs:
  -

- Cú pháp: `const ref = useRef(initialValue)`
-
