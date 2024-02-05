import ContactPage from '@/components/ContactPage'
import getMetadata from '@/utils/getMetadata'

const ENContactPage = () => <ContactPage lang='en' />
const generateMetadata = async () => await getMetadata('contact', 'en')

export default ENContactPage
export { generateMetadata }
