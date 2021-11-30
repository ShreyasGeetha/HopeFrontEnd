const Faq = () => {
  return (
    <div>
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              <div className="pt-6">
                <dt className="text-lg">
                  {/* {Expand/collapse question button}  */}
                  <button type="button" className="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
                    <span className="font-medium text-gray-900">
                      What&#039;s the best thing about Switzerland?
                    </span>
                    <span className="ml-6 h-7 flex items-center">
                        {/* Expand/collapse icon, toggle classes based on question open state.

                        Heroicon name: outline/chevron-down

                        Open: "-rotate-180", Closed: "rotate-0" */}
                      <svg className="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd className="mt-2 pr-12" id="faq-0">
                  <p className="text-base text-gray-500">
                    I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                  </p>
                </dd>
              </div>              
            </dl>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              <div className="pt-6">
                <dt className="text-lg">
                  {/* {Expand/collapse question button}  */}
                  <button type="button" className="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
                    <span className="font-medium text-gray-900">
                      What&#039;s the best thing about Switzerland?
                    </span>
                    <span className="ml-6 h-7 flex items-center">
                        {/* Expand/collapse icon, toggle classes based on question open state.

                        Heroicon name: outline/chevron-down

                        Open: "-rotate-180", Closed: "rotate-0" */}
                      <svg className="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd className="mt-2 pr-12" id="faq-0">
                  <p className="text-base text-gray-500">
                    I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente magnam eos impedit deleniti temporibus, quaerat, et, nostrum ut illum aut. Minus nihil dolorum debitis eos id aliquid, harum eveniet.
                    Iste, laboriosam. Autem dignissimos hic nostrum nisi maxime at natus adipisci non fugiat, eveniet officiis reprehenderit labore reiciendis odit iusto libero temporibus ea corrupti quibusdam dolore excepturi? Nulla, in illo.
                    In, officiis? Rem quas iure ullam a natus itaque ducimus consequatur exercitationem maxime autem commodi repudiandae blanditiis enim sed tempora minus id, obcaecati, molestiae nihil! Ad sed facere doloremque a!
                    Ad at voluptatibus soluta qui debitis reprehenderit reiciendis autem aliquam dolores minus aut incidunt sapiente ullam assumenda atque officiis ipsum temporibus cum modi natus, inventore suscipit optio quae nesciunt. Et.
                  </p>
                </dd>
              </div>              
            </dl>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;