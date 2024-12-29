export const useCheckLogin = () => {
    const key = localStorage.getItem("token");
    if (key == null) return false;
    else return true;
};
