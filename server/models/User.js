const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    isFarmer: {
      type: Boolean,
      default: false,
    },
    address: {
      type: String,
    },
    reviews: [{
      type: Schema.Types.ObjectId,
      ref: 'Review'
    }],
    profilePic: {
      type: Buffer,
      ref: 'Image'
    },
    orders: [{
      type: Schema.Types.ObjectId,
      ref: 'PurchaseOrder'
    }],
    location: {
      type: Schema.Types.ObjectId,
      ref: 'Location'
    },
    cart: [{
      price: {
        type: Number
      },
      dateAdded: {
        type: Date,
        default: new Date().toUTCString()
      },
      quantity: {
        type: {
          type: String
        },
        amount: Number
      },
      farmID: {
        type: Schema.Types.ObjectId,
        ref: 'Farm'
      },
      productID: {
        type: Schema.Types.ObjectId,
        ref: 'Product' 
      }
    }]
  },
  {

  }
);

// hash user password
userSchema.pre('save', async function (next) {
  console.log(this)
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual('fullName').get(function () {
  return `${this.firstName} ${this.lastName}`
})


const User = model('User', userSchema);

module.exports = User;
