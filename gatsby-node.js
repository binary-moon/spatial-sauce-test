exports.createPages = async ({ actions: {createPage}, graphql }) => {
  const results = await graphql(`
    {
      allOurWorkJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (results.error) {
    console.error('Something went wrong!');
    return;
  }

  results.data.allOurWorkJson.edges.forEach(edge => {
    const ourWork = edge.node;

    createPage({
      path: `/our-work/${ourWork.slug}`,
      component: require.resolve('./src/templates/OurWorkDetail.js'),
      context: {
        slug: ourWork.slug
      }
    })
  })
}