import { BASE_URL } from "./config";

export const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export function getCookie(name) {
    const matches = document.cookie.match(
      new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
  
  export function setCookie(name, value, props) {
    props = props || {};
    let exp = props.expires;
    if (typeof exp == 'number' && exp) {
      const d = new Date();
      d.setTime(d.getTime() + exp * 1000);
      exp = props.expires = d;
    }
    if (exp && exp.toUTCString) {
      props.expires = exp.toUTCString();
    }
    value = encodeURIComponent(value);
    let updatedCookie = name + '=' + value;
    for (const propName in props) {
      updatedCookie += '; ' + propName;
      const propValue = props[propName];
      if (propValue !== true) {
        updatedCookie += '=' + propValue;
      }
    }
    document.cookie = updatedCookie;
  }
  
  export function deleteCookie(name) {
    setCookie(name, null, { expires: -1 });
  }

  export async function fetchRequest(url, options) {
    const res = await fetch(url, options);
    return checkResponse(res);
  }

  export async function fetchRequestRefresh(url, options) {
    try {
      const res = await fetch(url, options);
      return checkResponse(res);
    } catch (err) {
      if (err.message === "jwt expired") {
        return fetch(`${BASE_URL}/auth/token`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token: localStorage.getItem('refreshToken') })
        }).then(res_1 => {
          if (!res_1.success) return Promise.reject(res_1);
          localStorage.setItem("refreshToken", res_1.refreshToken);
          setCookie("accessToken", res_1.accessToken);
          options.headers.authorization = res_1.accessToken;
          return fetchRequest(url, options);
        });
      } else return Promise.reject(err);
    }
  }