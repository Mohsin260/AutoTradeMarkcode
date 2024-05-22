import mongoose from "mongoose";

// const userSchema = mongoose.Schema(
//   {
//     username: {
//       type: String,
//       required: true,
//       unique: true,
//       min: 3,
//       max: 20,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       max: 50,
//     },
//     password: {
//       type: String,
//       required: true,
//       min: 6,
//     },
//     img: {
//       type: String,
//     },
//     isAdmin: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   { timestamps: true }
// );

// const postSchema = mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//     desc: {
//       type: String,
//       required: true
//     },
//     img: {
//       type: String,
//     },
//     userId: {
//       type: String,
//       required: true,
//     },
//     slug: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//   },
//   { timestamps: true }
// );

// export const User = mongoose.models?.User || mongoose.model("User", userSchema);
// export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);


const Schema = mongoose.Schema;

// Define BtnLinks subdocument schema
const BtnLinksSchema = new Schema({
  view_details: { type: String },
  test_drive: { type: String },
  email_us: { type: String },
  car_photos: { type: String },
  apply_now: { type: String },
  call_us: { type: String },
  trade_ins: { type: String },
  capital_one: { type: String },
  capital_oneImg: { type: String }
});

// Define Badges subdocument schema
const BadgesSchema = new Schema({
  carfax: { type: String },
  carfax_img: { type: String },
  military_badge: { type: String }
});

// Define InventoryViewDTO schema with embedded BtnLinks and Badges
const InventoryViewDTOSchema = new Schema({
  vehicleID: { type: Number, required: true },
  modelYear: { type: Number },
  make: { type: String },
  model: { type: String },
  title: { type: String },
  title_href: { type: String },
  price: { type: Number },
  mileage: { type: Number },
  extColor: { type: String },
  intColor: { type: String },
  stockNumber: { type: String },
  vin: { type: String },
  bodyStyle: { type: String },
  trim: { type: String },
  isNew: { type: Boolean },
  driveType: { type: String },
  mpg: { type: String },
  inStockDate: { type: Date },
  age: { type: Number },
  ageBand: { type: String },
  condition: { type: String },
  internetPrice: { type: Number },
  retailPrice: { type: Number },
  wholesalePrice: { type: Number },
  reducedPrice: { type: Number },
  isPublished: { type: Boolean },
  featured: { type: Boolean },
  salePending: { type: Boolean },
  spotLight: { type: Boolean },
  vehicleImage: { type: String },
  vehicle800Image: { type: String },
  vehicleTotalImages: { type: Number },
  doors: { type: Number },
  creditApplicationCount: { type: Number },
  vehicleLeadCount: { type: Number },
  liveDate: { type: Date },
  liveAge: { type: Number },
  engine: { type: String },
  transmission: { type: String },
  fuelType: { type: String },
  priceLastUpdated: { type: Date },
  purchaseDate: { type: Date },
  priceLastUpdatedDays: { type: Number },
  btnlinks: BtnLinksSchema,  // Embedded BtnLinks schema
  badges: BadgesSchema       // Embedded Badges schema
});

// Create and export the model
const InventoryViewDTO = mongoose.model('InventoryViewDTO', InventoryViewDTOSchema);
module.exports = InventoryViewDTO;

