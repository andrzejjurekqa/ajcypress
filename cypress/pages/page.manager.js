import LoginSidebar from "./loginSidebar"

class PageManager {
    elements = {
        loginSidebar: () => new LoginSidebar(),
    }
}

export default PageManager;