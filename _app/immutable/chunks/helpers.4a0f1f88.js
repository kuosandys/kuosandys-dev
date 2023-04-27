function o(e,a=!0,n="unknown date"){const t=new Date(e);return t?`${t.getFullYear()} ${t.toLocaleString("default",{month:"short"})}${a?` ${t.getDate()}`:""}`:n}export{o as f};
