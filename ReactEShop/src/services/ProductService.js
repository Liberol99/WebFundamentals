import axios from 'axios';

class ProductService {
    getToken = async () => {
        try {
            const response = await axios.post(
                `http://localhost:8080/api/Authentication/Login?userCode=Sentez&password=1&companyCode=10&userType=0`, null);
            console.log('Veri başarıyla gönderildi:', response.data.Data);
            return response.data.Data;
        } catch (error) {
            console.error('Veri gönderme hatası:', error);
        }
    }

    getProducts = async () => {
        let QueryModel = {
            query: 'SELECT TOP 8 i.RecId, i.InventoryName, MAX(ipl.Price) AS Price ' +
                'FROM Erp_Inventory i LEFT JOIN Erp_InventoryPriceList ipl ON i.RecId = ipl.InventoryId ' +
                'WHERE ipl.Price IS NOT NULL ' +
                'GROUP BY i.RecId, i.InventoryName ' +
                'ORDER BY i.RecId DESC'
        };
        try {
            const token = await this.getToken();
            const response = await axios.post(`http://localhost:8080/api/Utility/UtilityQuery`, QueryModel, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('Veri başarıyla gönderildi:', response.data.Data);
            return response.data.Data;
        } catch (error) {
            console.error('Veri gönderme hatası:', error);
        }
    }
}

export default ProductService;
