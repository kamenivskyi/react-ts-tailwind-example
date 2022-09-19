type TProps = {
  avatarUrl: string;
  login: string;
  type: string;
  htmlUrl: string;
};

export const CardItem = (props: TProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center py-10">
      <img
        className="mb-3 w-24 h-24 rounded-full shadow-lg"
        src={props.avatarUrl}
        alt="Bonnie image"
      />
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        {props.login}
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {props.type}
      </span>
      <div className="flex mt-4 space-x-3 md:mt-6">
        <a
          href={props.htmlUrl}
          title="Go to profile on github"
          className="inline-flex propss-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          target="_blank"
        >
          Go to {props.type.toLowerCase() === "user" ? "profile" : "overview"}
        </a>
      </div>
    </div>
  );
};
