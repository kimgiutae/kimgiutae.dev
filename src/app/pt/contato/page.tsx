import ContactPage from '@/components/ContactPage'
import getMetadata from '@/utils/getMetadata'

const PTContactPage = () => <ContactPage lang='pt' />
const generateMetadata = async () => await getMetadata('contact', 'pt')

export default PTContactPage
export { generateMetadata }
