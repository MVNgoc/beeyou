import React from 'react';
import section1_frame2 from '../assets/image/section1-frame2.png';
import section1_frame1 from '../assets/image/section1-frame1.png';
import {
  ArrowVerticalIcon,
  ColorIcon,
  CottonIcon,
  YellowLine,
  ZipperIcon
} from '../assets/icons/index';
import { BannerSlide, Button, ProductSlide } from '../components/index';
import section2_frame1 from '../assets/image/section2-frame1.png';
import section2_frame2 from '../assets/image/section2-frame2.png';
import section2_frame3 from '../assets/image/section2-frame3.png';
import pink_bag from '../assets/image/product/pink-bag.png';
import pink_bag_2 from '../assets/image/product/pink-bag2.png';
import black_bag from '../assets/image/product/black-bag.png';
import black_bag2 from '../assets/image/product/black-bag2.png';
import yellow_bag from '../assets/image/product/yellow-bag.png';
import white_bag from '../assets/image/product/white-bag.png';
import white_bag2 from '../assets/image/product/white-bag2.png';
import blue_bag from '../assets/image/product/blue-bag.png';

const bestseller_product_data = [
  {
    id: 1,
    name: 'Túi Totes Cactus Bag nữ tính xành điệu',
    price: 320000,
    image: pink_bag
  },
  {
    id: 2,
    name: 'Túi Totes Cactus Bag nữ tính xành điệu',
    price: 320000,
    image: black_bag
  },
  {
    id: 3,
    name: 'Túi Totes Cactus Bag nữ tính xành điệu',
    price: 320000,
    image: yellow_bag
  },
  {
    id: 4,
    name: 'Túi Totes Cactus Bag nữ tính xành điệu',
    price: 320000,
    image: white_bag
  }
];

const featured_product_data = [
  {
    id: 1,
    name: 'Túi Totes Cactus Bag nữ tính xành điệu',
    price: 320000,
    image: blue_bag
  },
  {
    id: 2,
    name: 'Túi Totes Cactus Bag nữ tính xành điệu',
    price: 320000,
    image: white_bag2
  },
  {
    id: 3,
    name: 'Túi Totes Cactus Bag nữ tính xành điệu',
    price: 320000,
    image: pink_bag_2
  },
  {
    id: 4,
    name: 'Túi Totes Cactus Bag nữ tính xành điệu',
    price: 320000,
    image: black_bag2
  }
];

const HomePage = () => {
  return (
    <div className="container">
      <BannerSlide />
      <section className="section-2 mt-[93px] relative">
        <div className="flex justify-between container">
          <div className="max-w-[530px]">
            <p className="text-[48px] font-bold leading-[72px]">
              Tote của BeeYou cam kết mang đến sự hài lòng tối đa cho bạn
            </p>
          </div>
          <div className="max-w-[390px]">
            <p className="text-base font-normal leading-6">
              Với cộng đồng nhà thiết kế, chúng tôi là ngôi nhà thời trang,nơi
              chắp cánh cho hàng vạn mẫu thiết kế của các Designer trên khắp
              Vietnam. <br />
              <br />
              Với khách hàng, BeeYou là nơi bạn dễ dàng tìm thấy những những sản
              phẩm thời trang thể hiện CHẤT của riêng mình. Là chính mình cùng
              BeeYou.
              <br />
              <br />
              Với đội ngũ lâu năm kinh nghiệm, có tâm với nghề, những dòng sản
              phẩm của BeeYou được tuyển chọn những nguyên vật liệu cao cấp
              nhất, gia công tinh xảo, công nghệ tối tân nhất hiện nay, được
              kiểm tra chất lượng đầu ra khắt khe.
            </p>
          </div>
        </div>
        <div className="absolute top-[36px] left-[367px] z-10">
          <img src={section1_frame2} alt="" className="max-h-[605px]" />
        </div>
        <div className="absolute left-[68px] bottom-[94px]">
          <img src={section1_frame1} alt="" className="max-h-[385px]" />
        </div>
        <div className="absolute bottom-[-40px] left-[-130px] w-[771px]">
          <YellowLine />
        </div>
      </section>
      <section className="flex gap-[83px] mt-[83px]">
        <div>
          <p className="text-[48px] font-bold leading-[72px]">
            Siêu phẩm Tote mới ra lò
          </p>
          <p className="text-base font-normal leading-6">
            Mới "chế" ra cái Tote mới các bác ạ. Thông tin mô tả sơ bộ các bác
            đọc ở dưới nhé. em đi đóng hàng giao cho khách phát
          </p>
          <div className="mt-[55px] w-full px-10 py-8 rounded-xl content-box">
            <h3 className="text-base font-medium leading-6">
              Thông tin mô tả sơ bộ
            </h3>
            <div className="mt-[23px] flex flex-col gap-4">
              <div className="flex gap-3 text-base font-normal leading-6">
                <CottonIcon />
                <p>Chất vải canvas mềm mịn, không xù, không nhão</p>
              </div>
              <div className="flex gap-3 text-base font-normal leading-6">
                <ColorIcon />
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
                <ZipperIcon />
                <p>Túi có khoá kéo, túi con tiện lợi cho nàng sử dụng</p>
              </div>
            </div>
            <Button className="mt-[22px]">
              <p className="text-base font-bold leading-6">Tìm hiểu thêm</p>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="max-w-[493px] w-[493px]">
            <img src={section2_frame2} alt="" className="w-full" />
            <div className="absolute w-full -top-[75px] left-0 z-20 rounded-b-full overflow-hidden">
              <img
                src={section2_frame1}
                alt=""
                className="max-w-[260px] w-[260px] ml-[117px]"
              />
            </div>
          </div>

          <div className="absolute -top-6 -right-6 max-w-[493px] w-[493px]">
            <img src={section2_frame3} alt="" className="w-full" />
          </div>
        </div>
      </section>
      <section className="mt-[56px]">
        <div className="flex flex-col gap-1 mb-[92px]">
          <h2 className="text-[48px] font-bold leading-[72px]">
            Tote giá “nóng”
          </h2>
          <p className="text-base font-normal leading-6">
            Đống này đang giảm giá nên rất "nóng”. Bạn còn chờ gì nữa mà "phỏng
            tay” ngay đi
          </p>
        </div>
        <ProductSlide data={bestseller_product_data} />
      </section>
      <section className="mt-[74px]">
        <div className="flex flex-col gap-1 mb-[48px]">
          <h2 className="text-[48px] font-bold leading-[72px]">
            Tote bán chạy
          </h2>
          <p className="text-base font-normal leading-6">
            Ra bao nhiêu hàng cũng bán không kịp với mấy cô mà, mà cứ như vậy là
            Bee thích à <br /> nha, hehe
          </p>
        </div>
        <ProductSlide data={featured_product_data} />
      </section>
      <section className="mt-[74px]">
        <div className="flex flex-col gap-1 mb-[48px]">
          <h2 className="text-[48px] font-bold leading-[72px]">Tote nổi bật</h2>
          <p className="text-base font-normal leading-6">
            Ra bao nhiêu hàng cũng bán không kịp với mấy cô mà, mà cứ như vậy là
            Bee thích à <br /> nha, hehe
          </p>
        </div>
        <ProductSlide data={featured_product_data} />
      </section>
    </div>
  );
};

export default HomePage;
