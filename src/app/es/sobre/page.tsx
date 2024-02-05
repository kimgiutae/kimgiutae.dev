import AboutPage from '@/components/AboutPage'
import getMetadata from '@/utils/getMetadata'

const ESAboutPage = () => <AboutPage lang='es' />
const generateMetadata = async () => await getMetadata('about', 'es')

export default ESAboutPage
export { generateMetadata }
