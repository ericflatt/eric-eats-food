export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61e1fe7ad09d80468128ce09",
                  title: "Sanity Studio",
                  name: "eric-eats-food-studio",
                  apiId: "8efc551a-9588-4510-b88e-7acfee7e8199",
                },
                {
                  buildHookId: "61e1fe7a987abf47287503bd",
                  title: "Blog Website",
                  name: "eric-eats-food",
                  apiId: "69e6d6f8-64a9-4b95-b958-7a8d58ca56ff",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ericflatt/eric-eats-food",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://eric-eats-food.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
