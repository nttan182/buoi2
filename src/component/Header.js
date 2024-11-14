import { Link } from "react-router-dom";

function Item({ props }) {
  return (
    <li class="nav-item">
      <Link class="nav-link active" aria-current="page" to={props.link}>
        {props.content}
      </Link>
    </li>
  );
}
function Menu({ list }) {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#">
            Navbar
          </Link>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {list.map((item, index) => (
                <Item props={item} key={index} />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
function Header() {
  const list = [
    {
      link: "/hello",
      content: "Hello",
    },
    {
      link: "/car",
      content: "Car",
    },
    {
      link: "/login",
      content: "Login",
    },
    {
      link: "/viewlistgroup",
      content: "List Group",
    },
  ];
  return <Menu list={list} />;
}
export { Item, Menu, Header };
