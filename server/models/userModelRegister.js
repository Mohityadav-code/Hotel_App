const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

 

const userSchema = new Schema({
    name:{
        type: String,
        required: "Name is required",
        trim: true,

    },
    email:{
        type: String,
        required: "Email is required",
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: "Password is required",
        minlength: 6
    }

},
{timestamps: true}
);
// we will hash our passwords if user have modified their passwords
userSchema.pre('save', function(next){
    let user=this
    if(user.isModified('password')){
       return bcrypt.hash(user.password , 12, function(err, hash){
            if(err){
                console.log('Error in hashing password', err);
                return next(err)
            }
            user.password=hash
            return next()
        })
    }else{
        return next()
    }
})
const User= mongoose.model('users', userSchema); 

module.exports = User

// here users is a model object and userSchema is a schema object 
// above we have created a model object using a schema object
//  and now we will use this model object to create a new record in our database
