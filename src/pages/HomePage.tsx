import React from 'react';
import section1_frame2 from '../assets/image/section1-frame2.png';
import section1_frame1 from '../assets/image/section1-frame1.png';
import {
  ArrowVerticalIcon,
  ColorIcon,
  CottonIcon,
  InstagramSectionIcon,
  YellowLine,
  ZipperIcon,
  YellowLineMb
} from '../assets/icons/index';
import {
  BannerSlide,
  Button,
  InstagramSlide,
  ProductSlide,
  VerticalSlide
} from '../components/index';
import section2_frame1 from '../assets/image/section2-frame1.png';
import section2_frame2 from '../assets/image/section2-frame2.png';
import bag_banner from '../assets/image/bag_banner.png';
import section2_frame3 from '../assets/image/section2-frame3.png';
import { Link } from 'react-router-dom';
import {
  bestseller_product_data,
  featured_product_data,
  instagramData,
  verticleSlideData
} from '../constants/data.constant';

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <div className="container">
        <BannerSlide />
        <section className="section-2 mt-[64px] lg:mt-[93px] relative flex flex-col">
          <div className="flex flex-col lg:flex-row justify-between order-1 mt-[87.18px] lg:mt-0">
            <div className="w-full lg:max-w-[530px]" data-aos="fade-right">
              <h1 className="text-2xl lg:text-[48px] font-bold leading-9 lg:leading-[72px]">
                Tote của BeeYou cam kết mang đến sự hài lòng tối đa cho bạn
              </h1>
            </div>
            <div className="w-full lg:max-w-[390px]" data-aos="fade-left">
              <p className="text-base lg:text-base font-normal leading-6">
                Với cộng đồng nhà thiết kế, chúng tôi là ngôi nhà thời trang,nơi
                chắp cánh cho hàng vạn mẫu thiết kế của các Designer trên khắp
                Vietnam. <br />
                <br />
                Với khách hàng, BeeYou là nơi bạn dễ dàng tìm thấy những những
                sản phẩm thời trang thể hiện CHẤT của riêng mình. Là chính mình
                cùng BeeYou.
                <br />
                <br />
                Với đội ngũ lâu năm kinh nghiệm, có tâm với nghề, những dòng sản
                phẩm của BeeYou được tuyển chọn những nguyên vật liệu cao cấp
                nhất, gia công tinh xảo, công nghệ tối tân nhất hiện nay, được
                kiểm tra chất lượng đầu ra khắt khe.
              </p>
            </div>
          </div>
          <div className="max-[430px]:relative">
            <div className="lg:absolute lg:top-[36px] lg:left-[367px] relative z-40">
              <img
                src={section1_frame2}
                alt=""
                className="max-h-[407px] lg:max-h-[605px]"
              />
            </div>
            <div className="absolute bottom-[29px] left-[-50vw] lg:left-[68px] lg:bottom-[94px] -mx-6 z-0">
              <img
                src={section1_frame1}
                alt=""
                className="max-h-[260px] lg:max-h-[385px] object-cover"
              />
            </div>
            <div className="absolute right-[34vw] bottom-[-40vw] lg:bottom-[-40px] lg:left-[-130px] lg:w-[771px] hidden md:block">
              <YellowLine />
            </div>
            <div className="absolute md:hidden -left-[28px]">
              <YellowLineMb />
            </div>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row lg:gap-[83px] mt-[83px]">
          <div className="order-2 mt-[32.22px] lg:mt-0 lg:order-1">
            <div data-aos="zoom-in">
              <p className="text-2xl lg:text-[48px] font-bold leading-[36px] lg:leading-[72px]">
                Siêu phẩm Tote mới ra lò
              </p>
              <p className="text-base font-normal leading-6">
                Mới "chế" ra cái Tote mới các bác ạ. Thông tin mô tả sơ bộ các
                bác đọc ở dưới nhé. em đi đóng hàng giao cho khách phát
              </p>
            </div>
            <div
              className="mt-8 lg:mt-[55px] w-full p-4 pt-7 lg:px-10 lg:py-8 rounded-xl content-box relative"
              data-aos="flip-left"
            >
              <div className="bg-Pale_Pink absolute -left-[30px] top-[7px] w-[86.18px] h-[18px] lg:w-[126.75px] lg:h-[26.56px] opacity-70 lg:-left-[43px] lg:top-[14px] -rotate-[43.171deg]"></div>
              <h3 className="text-base font-medium leading-6">
                Thông tin mô tả sơ bộ
              </h3>
              <div className="mt-6 flex flex-col gap-4">
                <div className="flex gap-3 text-base font-normal leading-6">
                  <div className="flex-1 lg:flex-initial">
                    <CottonIcon />
                  </div>
                  <p>Chất vải canvas mềm mịn, không xù, không nhão</p>
                </div>
                <div className="flex gap-3 text-base font-normal leading-6">
                  <div className="flex-1 lg:flex-initial">
                    <ColorIcon />
                  </div>
                  <p>
                    Bee có 5 màu cho bạn lựa canh: Xanh dương, Hồng baby, Vàng
                    chanh,...
                  </p>
                </div>
                <div className="flex gap-3 text-base font-normal leading-6">
                  <ArrowVerticalIcon />
                  <p>Size túi: 38*34*7cm</p>
                </div>
                <div className="flex gap-3 text-base font-normal leading-6">
                  <div className="flex-1 lg:flex-initial">
                    <ZipperIcon />
                  </div>
                  <p>Túi có khoá kéo, túi con tiện lợi cho nàng sử dụng</p>
                </div>
              </div>
              <Button className="mt-4 w-full lg:mt-[22px] lg:w-[170px]">
                <p className="text-base font-bold leading-6">Tìm hiểu thêm</p>
              </Button>
            </div>
          </div>
          <div className="relative order-1 h-[343px] lg:h-auto">
            <div className="w-[83vw] lg:max-w-[493px] lg:w-[493px]">
              <img
                src={section2_frame2}
                alt=""
                className="w-[83vw] lg:w-full absolute bottom-0 lg:top-[43px]"
              />
              <div className="absolute w-full bottom-0 left-0 z-20 rounded-b-full overflow-hidden lg:bottom-[-43px]">
                <img
                  src={section2_frame1}
                  alt=""
                  className="w-[157px] lg:max-w-[260px] mx-auto lg:w-[260px] lg:ml-[117px]"
                />
              </div>
            </div>
            <div className="absolute right-[0px] bottom-[14.48px] lg:top-[19px] w-[83vw] lg:-right-6 lg:max-w-[493px] lg:w-[493px]">
              <img src={section2_frame3} alt="" className="w-full" />
            </div>
          </div>
        </section>
        <section className="mt-[64px] lg:mt-[94px]">
          <div
            className="flex flex-col gap-1 mb-2 lg:mb-[36px]"
            data-aos="zoom-in"
          >
            <h2 className="text-2xl lg:text-[48px] font-bold leading-[36px] lg:leading-[72px]">
              Tote giá “nóng”
            </h2>
            <p className="text-base font-normal leading-6">
              Đống này đang giảm giá nên rất "nóng”. Bạn còn chờ gì nữa mà
              "phỏng tay” ngay đi
            </p>
          </div>
          <div data-aos="fade-right">
            <ProductSlide data={bestseller_product_data} />
          </div>
        </section>
        <section className="mt-[74px]">
          <div className="flex flex-col gap-1 mb-2 lg:-mb-2" data-aos="zoom-in">
            <h2 className="text-2xl text-center lg:text-[48px] font-bold leading-9 lg:leading-[72px] lg:text-start">
              Tote bán chạy
            </h2>
            <p className="text-base font-normal leading-6 text-center lg:text-start">
              Ra bao nhiêu hàng cũng bán không kịp với mấy cô mà, mà cứ như vậy
              là Bee thích à <br /> nha, hehe
            </p>
          </div>
          <div data-aos="fade-left">
            <ProductSlide data={featured_product_data} />
          </div>
        </section>
        <section className="mt-[74px]">
          <div className="flex flex-col gap-1 mb-2 lg:-mb-2" data-aos="zoom-in">
            <h2 className="text-2xl lg:text-[48px] font-bold leading-9 lg:leading-[72px]">
              Tote nổi bật
            </h2>
            <p className="text-base font-normal leading-6">
              Ra bao nhiêu hàng cũng bán không kịp với mấy cô mà, mà cứ như vậy
              là Bee thích à <br /> nha, hehe
            </p>
          </div>
          <div data-aos="fade-right">
            <ProductSlide data={featured_product_data} />
          </div>
        </section>
      </div>
      <section className="mt-[76px] lg:flex gap-[152px]">
        <img
          src={bag_banner}
          alt="bag banner"
          className="max-h-[360px] lg:max-h-[702px]"
          data-aos="fade-right"
        />
        <div
          className="flex flex-col gap-[16.85px] lg:gap-0 px-6 lg:px-0 mt-8 lg:mt-0"
          data-aos="fade-left"
        >
          <div className="flex flex-col gap-1 lg:mt-[38px]">
            <h2 className="text-2xl lg:text-[48px] font-bold leading-9 lg:leading-[72px]">
              Đánh giá của các nàng
            </h2>
            <p className="text-base font-normal leading-6">
              Mấy đánh giá này là lấy từ facebook qua nè, không có tự bịa ra đâu
              nha. Hông tin lên <br /> facebook mà xem.
            </p>
          </div>
          <div className="lg:mt-10 -mx-6">
            <VerticalSlide verticleSlideData={verticleSlideData} />
          </div>
        </div>
      </section>
      <section className="mt-[115px] mb-3 lg:mb-[22px]">
        <div
          className="flex flex-col gap-1 justify-center items-center text-center"
          data-aos="zoom-in"
        >
          <div className="flex flex-col gap-1 px-6">
            <h2 className="text-2xl lg:text-[48px] font-bold leading-9 lg:leading-[72px]">
              BeeYou trên Instagram
            </h2>
            <p className="text-base font-normal leading-6">
              Follow BeeYou trên instagram để có cơ hội tham gia các chương
              trình ưu đãi dành <br /> riêng cho người dùng Instagram
            </p>
          </div>
          <div className="mt-2 mb-[23px] lg:mb-0 lg:mt-3 flex items-center gap-2">
            <InstagramSectionIcon />
            <Link to={'/'}>
              <u className="text-sm font-bold leading-5 text-Secondary">
                instagr.am/beeyoufashion
              </u>
            </Link>
          </div>
          <div className="-mt-5 max-w-[100vw] w-[100vw] overflow-hidden">
            <InstagramSlide data={instagramData} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
