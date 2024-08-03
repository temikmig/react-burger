import { BASE_URL } from "./config";
import { TFeed, TFeedItem, TFeedItemMap, TFeedMap, TIngredient, TTokens } from "./types";

export const checkResponse = (res:Response) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export function getCookie(name:string) {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
  
export function setCookie(name: string, value: string, props?: Record<string, any>) {
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
  
export function deleteCookie(name:string) {
  setCookie(name, '', { expires: -1 });
}

export async function fetchRequest(url:string, options?:any) {
  const res = await fetch(url, options);
  return checkResponse(res);
}

export async function fetchRequestRefresh(url:string, options?:any) {
  try {
    const res = await fetch(url, options);
    return checkResponse(res);
  } catch (err:any) {
    if (err.message === "jwt expired") {
      return fetch(`${BASE_URL}/auth/token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: localStorage.getItem('refreshToken') })
      }).then((res_1:any) => {
        if (!res_1.success) return Promise.reject(res_1);
        localStorage.setItem("refreshToken", res_1.refreshToken);
        setCookie("accessToken", res_1.accessToken);
        options.headers.authorization = res_1.accessToken;
        return fetchRequest(url, options);
      });
    } else return Promise.reject(err);
  }
}


export const mapFeedItems = (feed: any, ingredients: readonly TIngredient[]): any => {
    let order = {
      _id: feed.orders._id,
      status: feed.orders.status,
      number: feed.orders.number,
      createdAt: feed.orders.createdAt,
      updatedAt: feed.orders.updatedAt,
      name: feed.orders.name,
      ingredients: feed.orders.ingredients.map((id:string) => {
        const ingredient = ingredients.filter(ing => ing._id === id)[0];
        return { ...ingredient };
      })
    }
    return order;
}