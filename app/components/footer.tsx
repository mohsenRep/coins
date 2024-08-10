const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white p-4 lg:px-10 2xl:px-36">
      <div className="2xl:container mx-auto grid grid-cols-3 gap-6 items-center">
        <div className="col-span-3 lg:col-span-1">
          <img
            src="/img/logo-dark.svg"
            alt="والت"
            className="h-12 mb-4 lg:h-16"
            
          />
          <p className="text-xs 2xl:text-base leading-6">
            راهکارهای پرداخت در سال 2009 فعالیت خود را در زمینه سیستم های پرداخت
            بین المللی با وب‌سایت wallet.ir آغاز کرد. ری پرداخت با نام تجاری MGY
            INVESTMENT LTD با شماره ثبت 72653063 در کشور انگلستان به ثبت رسید و
            فعالیت رسمی آغاز نمود.
          </p>
          <hr className="mt-6 lg:hidden h-0.5 border-t-0 bg-white/10" />
        </div>

        <div className="col-span-2 lg:col-span-1">
          <h3 className="font-bold mb-6 text-sm lg:text-base 2xl:text-xl text-light-blue">
            لینک های مرتبط
          </h3>
          <ul className="grid grid-rows-4 grid-flow-col gap-3 text-xs 2xl:text-base">
            <li className="mb-2">
              <a href="#" className="hover:text-light-blue">
                صفحه اصلی
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-light-blue">
                قیمت رمزارزها
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-light-blue">
                مقالات و وبلاگ
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-light-blue">
                درباره ما
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-light-blue">
                سوالات متداول
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-light-blue">
                شرایط و قوانین
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-light-blue">
                فرصت های شغلی
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-light-blue">
                انجمن
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-1">
          <h3 className="font-bold mb-6 text-sm lg:text-base 2xl:text-xl text-light-blue">
            تبادل ارز
          </h3>
          <ul className="grid grid-rows-4 grid-flow-col gap-3 text-xs 2xl:text-base">
            <li className="mb-2">
              <a href="#" className="hover:text-light-blue">
                خرید بیت کوین
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-light-blue">
                خرید اتریوم
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-light-blue">
                خرید ریپل
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-light-blue">
                خرید سولانا
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hidden lg:block hover:text-light-blue">
                خرید یواس دی کوین
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hidden lg:block hover:text-light-blue">
                خرید چین لینک
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hidden lg:block hover:text-light-blue">
                خرید دوج کوین
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hidden lg:block hover:text-light-blue">
                خرید تتر
              </a>
            </li>
          </ul>
        </div>
        <hr className="col-span-3 h-0.5 border-t-0 bg-white/10" />
      </div>

      <div className="2xl:container mx-auto flex flex-col lg:flex-row-reverse justify-between items-center">
        <div className="flex justify-center space-x-4 space-x-reverse my-6 lg:my-0 items-center">
          <a
            href="#"
            className="flex w-10 h-10 mx-1 justify-center items-center rounded-full bg-gray-200 text-black hover:border-gray-300"
          >
            <i className="fab fa-instagram text-lg"></i>
          </a>
          <a
            href="#"
            className="flex w-10 h-10 mx-1 justify-center items-center rounded-full bg-gray-200 text-black hover:border-gray-300"
          >
            <i className="fab fa-telegram-plane text-lg"></i>
          </a>
          <a
            href="#"
            className="flex w-10 h-10 mx-1 justify-center items-center rounded-full bg-gray-200 text-black hover:border-gray-300"
          >
            <i className="fab fa-twitter text-lg"></i>
          </a>
          <a
            href="#"
            className="flex w-10 h-10 mx-1 justify-center items-center rounded-full bg-gray-200 text-black hover:border-gray-300"
          >
            <i className="fab fa-linkedin-in text-lg"></i>
          </a>
          <a
            href="#"
            className="flex w-10 h-10 mx-1 justify-center items-center rounded-full bg-gray-200 text-black hover:border-gray-300"
          >
            <i className="fab fa-youtube text-lg"></i>
          </a>
        </div>
        <hr className="w-full h-0.5 border-t-0 bg-white/10 lg:hidden" />

        <p className="my-6 text-center text-sm">
          تمامی حقوق این سرویس متعلق به مجموعه ری پیمنت است
        </p>
      </div>
    </footer>
  );
};

export default Footer;
