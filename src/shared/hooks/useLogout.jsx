
export const useLogout = () => {
    localStorage.removeItem('token'); //quito el token
    localStorage.removeItem('userRole'); // quito el role
    
    window.location.href = '/';
}
