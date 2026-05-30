import { Link } from "react-router-dom";
import s from "./Admin.module.css";

const Admin = () => {
  return (
    <section className={s.admin}>
      <Link className={s.link} to={"/admin/createCard"}>
        Create Card Page
      </Link>

      <Link className={s.link} to={"/admin/changeCard"}>
        Change Card Page
      </Link>
    </section>
  );
};

export default Admin;
