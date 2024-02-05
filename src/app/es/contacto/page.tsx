import ContactPage from '@/components/ContactPage'
import getMetadata from '@/utils/getMetadata'

const ESContactPage = () => <ContactPage lang='es' />
const generateMetadata = async () => await getMetadata('contact', 'es')

export default ESContactPage
export { generateMetadata }
