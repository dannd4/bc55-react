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
