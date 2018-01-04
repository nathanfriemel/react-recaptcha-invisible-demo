# React Recaptcha Invisible Demo

The file you probably just want to look at: [form.js](src/js/views/form.js). This is not a package you `npm install`, just an example of how to handle an invisible recaptcha in react without having to npm install anything.

# If you want to build this for some reason
```
npm install
npm run dev
```

Modify form.js with your recaptcha sitekey and check the console on form submit.

# Why?
There are other packages that make nice Recaptcha components, I suggest you check them out: [react-recaptcha](https://github.com/appleboy/react-recaptcha), [react-google-invisible-recaptcha](https://github.com/szchenghuang/react-google-invisible-recaptcha), and probably many more.

In an effort to fight code bloat I didn't need something that would work with n number of recaptchas within on app using random UUIDs or in vanilla JavaScript for some reason.  So I wrote something like this and wanted to share.