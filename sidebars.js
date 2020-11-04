module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      items: [
        'about',
        'how-it-works'
      ]
    },
    {
      type: 'category',
      label: 'Tutorials',
      collapsed: false,
      items: [
        'tutorials/getting-started',
        {
          type: 'category',
          label: 'Todo app',
          collapsed: false,
          items: [
            'tutorials/todo-app',
            'tutorials/todo-app/1-crud',
            'tutorials/todo-app/2-dependencies-and-auth'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Language',
      collapsed: false,
      items: [
        'language/overview',
        'language/basic-elements'
      ]
    },
    {
      type: 'category',
      label: 'Other',
      collapsed: false,
      items: [
        'contributing',
        'vision'
      ]
    }
  ]
}
