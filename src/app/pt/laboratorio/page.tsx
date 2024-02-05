import getMetadata from '@/utils/getMetadata'
import LaboratoryPage from '@/components/LaboratoryPage'

const PTLaboratoryPage = () => <LaboratoryPage lang='pt' />
const generateMetadata = async () => await getMetadata('laboratory', 'pt')

export default PTLaboratoryPage
export { generateMetadata }
