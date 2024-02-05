import getMetadata from '@/utils/getMetadata'
import LaboratoryPage from '@/components/LaboratoryPage'

const ESLaboratoryPage = () => <LaboratoryPage lang='es' />
const generateMetadata = async () => await getMetadata('laboratory', 'es')

export default ESLaboratoryPage
export { generateMetadata }
