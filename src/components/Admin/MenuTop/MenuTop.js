
import "./MenuTop.scss";
import { Button } from "antd";
import { MenuFoldOutlined, PoweroffOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import TimoLogo from "../../../assets/img/png/logo.png";

export default function MenuTop(props){

    const {menuCollapsed, setMenuCollapsed} = props;

    return (
      <div className="menu-top">
        <div className="menu-top__left">
          <img
            src={TimoLogo}
            className="menu-top__left-logo"
            alt="Timoteo Ruiz Logo"
          />
          <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
            {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </div>
        <div className="menu-top__right">
          <Button type="link">
            <PoweroffOutlined />
          </Button>
        </div>
      </div>
    );
}

