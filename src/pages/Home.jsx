import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Slider için stil

const Container = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  font-family: 'Arial', sans-serif;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 20px;
  font-weight: 700;
`;

const SubHeading = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  color: #34495e;
  margin-bottom: 40px;
  font-weight: 600;
`;

const CarouselWrapper = styled.div`
  margin: 10px auto;
  max-width: 60%;  // Slider'ı biraz küçülttük
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 50px;
  gap: 20px;
`;

const Card = styled.div`
  background-color: #ffffff;
  padding: 10px;
  width: 45%;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 15px;
  font-weight: 600;
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: #34495e;
  line-height: 1.6;
`;

const ChartWrapper = styled.div`
  margin: 30px 0;
  text-align: center;
`;

const ChartTitle = styled.h3`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 15px;
  font-weight: 600;
`;

const Home = () => {
  return (
    <Container>
      <Heading>Kumar Bağımlılığı ve Etkileri</Heading>

      <CarouselWrapper>
        <Carousel 
          infiniteLoop 
          autoPlay 
          showThumbs={false} 
          showStatus={false} 
          dynamicHeight={false} 
          interval={3500} // Her 5 saniyede bir değişim
        >
          <div>
            <Image src="https://images.pexels.com/photos/269630/pexels-photo-269630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Kumar Bağımlılığı 1" />
            <p className="legend">Kumar bağımlılığı sosyal yaşamı olumsuz etkiler.</p>
          </div>
          <div>
            <Image src="https://images.pexels.com/photos/3021120/pexels-photo-3021120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Kumar Bağımlılığı 2" />
            <p className="legend">Kumar bağımlılığı, maddi sıkıntılara yol açar.</p>
          </div>
          <div>
            <Image src="https://images.pexels.com/photos/3279695/pexels-photo-3279695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Kumar Bağımlılığı 3" />
            <p className="legend">Tedavi ile kumar bağımlılığı kontrol altına alınabilir.</p>
          </div>
        </Carousel>
      </CarouselWrapper>

      <CardWrapper>
        <Card>
          <InfoTitle>Kumar Bağımlılığının Sosyal Etkileri</InfoTitle>
          <Image src="https://images.pexels.com/photos/7594394/pexels-photo-7594394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Sosyal Etkiler" />
          <InfoText>
            Kumar bağımlılığı, kişinin sosyal ilişkileri üzerinde yıkıcı bir etki yaratabilir. Bağımlı kişiler, kumar oynamaya sürekli zaman ayırarak aile ve arkadaşlarıyla ilişkilerini zayıflatır. Bu, yalnızlık hissini arttırabilir ve sosyal izolasyona yol açabilir.
            <br />
            Sosyal Etkiler:
            - Aile içi çatışmalar: Kumar bağımlılığı, aile üyeleri arasında büyük gerilimlere ve hatta boşanmalara yol açabilir.
            - Arkadaşlık ilişkilerinde zayıflama: Bağımlı kişiler, arkadaşlıklarını kumar oynama uğruna terk edebilirler.
            - Sosyal izolasyon: Kumar bağımlılığı nedeniyle insanlar, toplumsal etkinliklerden ve sosyal faaliyetlerden kaçınabilirler.
            <br />
            Veriler:
            - Kumar bağımlılığının %25'i aile içi şiddetle ilişkilidir.
            - Kumar bağımlılığının %30'u iş hayatındaki başarısızlıklarla bağlantılıdır.
          </InfoText>
        </Card>

        <Card>
          <InfoTitle>Kumar Bağımlılığının Ekonomik Etkileri</InfoTitle>
          <Image src="https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Ekonomik Etkiler" />
          <InfoText>
            Kumar bağımlılığının ekonomik etkileri çok geniştir. Kişiler, kaybettikleri parayı telafi etmek için daha fazla kumar oynamaya başlayabilirler, bu da onları finansal olarak zorluklarla karşı karşıya bırakır. 
            <br />
            Ekonomik Etkiler:
            - Maddi Kayb: Kumar bağımlılığına sahip kişiler, genellikle yüksek meblağlarda para kaybederler. 
            - Borçlanma: Kumar bağımlıları, borç alarak kumar oynama dürtüsünü tatmin etmeye çalışırlar. Bu borçlar, genellikle ödenemeyen kredi kartı borçları ve kişisel krediler şeklinde birikir.
            - İş Kaybı: Kumar bağımlılığı iş yerinde odak kaybına ve düşük performansa neden olabilir, bu da işten çıkarılmaya yol açabilir.
            <br />
            Veriler:
            - Kumar bağımlılığı nedeniyle iş kaybı yaşayan kişilerde %40 oranında finansal çöküş yaşanmaktadır.
            - Kumar bağımlılığının %50'si borçlanma ile sonuçlanmaktadır.
            <br />
            Bu ekonomik etkiler, bir kişinin hayatını derinden değiştirebilir ve ailesinin de aynı şekilde zorlanmasına sebep olabilir.
          </InfoText>
        </Card>
      </CardWrapper>

      <CardWrapper>
        <Card>
          <InfoTitle>Kumar Bağımlılığının Etkisi: Global Anket Verileri</InfoTitle>
          <Image src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Global Veriler" />
          <InfoText>
            Kumar bağımlılığının dünya genelindeki etkilerini anlamak için yapılan anket ve araştırmalar önemli veriler sunmaktadır. Birçok ülke, kumarın sosyal ve ekonomik sonuçlarını gözlemlemekte ve bağımlılıkla mücadele etmek için çeşitli politikalar geliştirmektedir.
            <br />
            Global Veriler:
            - Dünya genelinde 100 kişiden 1'inin kumar bağımlılığına sahip olduğu tahmin edilmektedir.
            - Kumar bağımlılığına sahip bireylerin %60'ı tedavi edilmediği sürece finansal çöküş yaşar.
            - Kumar bağımlılığının %50'si online platformlarla ilişkilidir.
            <br />
            Verilerin Kaynağı:
            - 2023 yılı itibariyle yapılan küresel kumar bağımlılığı anketine göre, 15-45 yaş arası bireylerde bağımlılık oranı %3 civarındadır.
            - Kumar bağımlılığı, özellikle internet üzerinden oynanan oyunlarla büyük bir hızla yayılmaktadır.
          </InfoText>
        </Card>

        <Card>
          
          <InfoTitle>Kumar Bağımlılığının Yaygınlığı: Global Grafik</InfoTitle>
            <Image 
              src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Global Gambling Addiction Statistics"
            />
            <p><strong>Global Kumar Bağımlılığı Yaygınlığı:</strong> Dünya genelinde kumar bağımlılığının yaygınlığı, araştırmalara göre artmaktadır. Bu grafik, farklı yaş gruplarındaki bireylerin kumar bağımlılığına oranlarını göstermektedir.</p>
          
        </Card>

        <Card>
  <InfoTitle>Kumar Bağımlılığının Psikolojik Etkileri</InfoTitle>
  <Image 
    src="https://images.pexels.com/photos/1007504/pexels-photo-1007504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
    alt="Psikolojik Etkiler"
  />
  <InfoText>
    Kumar bağımlılığı, bireylerin ruh sağlığı üzerinde ciddi olumsuz etkiler yaratabilir. Sürekli kaygı ve depresyon, bağımlılıkla ilişkili yaygın problemlerdir.
    <br />
    Psikolojik Sorunlar:
    - Kaygı ve Stres: Kumar oynama baskısı ve maddi kayıplar, sürekli stres ve anksiyete yaratabilir.
    - Depresyon: Maddi ve sosyal kayıplar, kişiyi depresyona sürükleyebilir.
    - Özgüven Kaybı: Sürekli başarısızlık hissi, bireylerin öz saygısını zedeler.
    <br />
    Veriler:
    - Kumar bağımlısı bireylerin %70'inde depresyon belirtileri görülmektedir.
    - Kumar bağımlılığı ile intihar girişimi arasında %25 oranında ilişki bulunmaktadır.
  </InfoText>
</Card>

<Card>
  <InfoTitle>Kumar Bağımlılığının Aile Üzerindeki Etkileri</InfoTitle>
  <Image 
    src="https://images.pexels.com/photos/7329531/pexels-photo-7329531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
    alt="Aile Etkileri"
  />
  <InfoText>
    Kumar bağımlılığı, aile dinamiklerini derinden etkiler ve özellikle çocuklar üzerinde uzun vadeli etkiler bırakabilir.
    <br />
    Aileye Yansımalar:
    - Eşler Arası Çatışma: Maddi kayıplar, aile içinde güven problemlerine ve çatışmalara yol açabilir.
    - Çocuklarda Travma: Kumar bağımlısı ebeveynlerin çocukları, duygusal travma yaşayabilir.
    - Ekonomik Baskı: Ailenin bütçesi üzerindeki olumsuz etkiler, diğer ihtiyaçların karşılanmasını engeller.
    <br />
    Veriler:
    - Kumar bağımlılığı olan bireylerin %50’sinin boşanma oranı daha yüksektir.
    - Aile içi şiddet vakalarının %20’si kumar bağımlılığı ile ilişkilidir.
  </InfoText>
</Card>



      </CardWrapper>
    </Container>
  );
};

export default Home;