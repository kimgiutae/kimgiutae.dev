import AboutPage from '@/components/AboutPage'
import getMetadata from '@/utils/getMetadata'

const ENAboutPage = () => <AboutPage lang='en' />
const generateMetadata = async () => await getMetadata('about', 'en')

export default ENAboutPage
export { generateMetadata }
