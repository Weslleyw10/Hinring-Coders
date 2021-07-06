import homeSectionOne from '../../components/sections/homeSectionOne'
import homeSectionTwo from '../../components/sections/homeSectionTwo'
import YodaBaby from '../../components/YodaBaby'


let Home = {
  is_private: false,

  render: async () => {
      let view = `
          <div>
            ${homeSectionOne}
            ${homeSectionTwo}
            ${YodaBaby}
          </div>
      `;

      return view
  },

  after_render: async () => {}
}

export default Home;