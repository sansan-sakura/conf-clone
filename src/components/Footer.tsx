export const Footer = () => {
  return (
    <div className="text-[10px] font-thin pt-10 px-4 pb-6 container">
      <div className="flex justify-between mb-4">
        <ul className="flex gap-2">
          <li>Past Conference</li>
          <li>
            <a className="underline">2021</a>
          </li>
          <li>
            <a className="underline">2019</a>
          </li>
          <li>
            <a className="underline">2018</a>
          </li>
          <li>
            <a className="underline">2017</a>
          </li>
          <li>
            <a className="underline">2016</a>
          </li>
          <li>
            <a className="underline">2015</a>
          </li>
        </ul>
        <a>
          <p className="underline">Code of Conduct</p>
        </a>
      </div>
      <small>&copy; 2024 Callstack all rights reserved</small>
    </div>
  );
};
