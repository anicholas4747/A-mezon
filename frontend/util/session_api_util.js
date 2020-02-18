export const signup = (user) => (
    $.ajax({
        method:"POST",
        url: "/api/users",
        data: { user }
    })
);

export const login = (user) => (
    $.ajax({
        method:"POST",
        url: "/api/session",
        data: { user }
    })
);

export const logout = () => (
    $.ajax({
        method:"DELETE",
        url: "/api/session"
    })
);

export const checkUser = (un_or_email) => (
    $.ajax({
        method: "GET",
        url: "/api/users/exists",
        data: { un_or_email }
    })
);

export const checkPassword = ({ un, pw }) => (
    $.ajax({
        method: "GET",
        url: "/api/users/exists",
        data: { 
            username: un,
            password : pw 
        }
    })
);

export const updateUser = ({id, username, email, password }) => (
    $.ajax({
        method: "PATCH",
        url: `/api/users/${id}`,
        data: { 
            user: {
                username: username,
                email: email,
                password : password 
            }
        }
    })
);