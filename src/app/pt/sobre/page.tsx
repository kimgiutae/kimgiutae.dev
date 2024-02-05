import AboutPage from '@/components/AboutPage'
import getMetadata from '@/utils/getMetadata'

const PTAboutPage = () => <AboutPage lang='pt' />
const generateMetadata = async () => await getMetadata('about', 'pt')

export default PTAboutPage
export { generateMetadata }
