import axios from "axios";
import FormData from "form-data";

const Stability = () => {

    const showImage = async () => {
        try {
            let searchInput = document.querySelector('#searchInput').value;
            if (searchInput === "") return;
            const formData = {
                prompt: (searchInput.trim()).toString(),
                output_format: "jpeg"
            };
            const response = await axios.postForm(
                `https://api.stability.ai/v2beta/stable-image/generate/sd3`,
                axios.toFormData(formData, new FormData()),
                {
                    validateStatus: undefined,
                    responseType: "arraybuffer",
                    headers: {
                        Authorization: `Bearer sk-jl9OZd6OehWb8JVZSfjiNe1jOakyX4y65CzfFgePJHBlF61W`, // Buraya kendi API anahtarınızı ekleyin
                        Accept: "image/*"
                    },
                },
            );

            if (response.status === 200) {
                let customImage = document.querySelector('.custom-img');
                customImage.src = response.data;
                // Blob oluştur
                const blob = new Blob([response.data], { type: "image/jpeg" });
                // Dosya URL oluştur
                const url = window.URL.createObjectURL(blob);
                // Dosyayı indirmek için bağlantı oluştur
                const link = document.createElement("a");
                link.href = url;
                link.download = "lighthouse.jpeg";
                // Bağlantıyı tıklamak için otomatik olarak tetikle
                link.click();
            } else {
                throw new Error(`${response.status}: ${response.data.toString()}`);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1>Stable Diffusion</h1>
            <div className="jumbotron bg-secondary text-light">
                <input type="search" required className="form-control" id="searchInput" />
                <button className="mt-3" onClick={async () => { await showImage(); }}>Yarat</button>
                <img className="img-fluid custom-img" />
            </div>
        </div>
    );
};

export default Stability;
