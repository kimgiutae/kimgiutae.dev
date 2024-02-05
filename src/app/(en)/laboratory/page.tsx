import getMetadata from '@/utils/getMetadata'
import LaboratoryPage from '@/components/LaboratoryPage'

const ENLaboratoryPage = () => <LaboratoryPage lang='en' />
const generateMetadata = async () => await getMetadata('laboratory', 'en')

export default ENLaboratoryPage
export { generateMetadata }
