const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const CompanySchema = new mongoose.Schema({

    email: {
        type: String,
    //    unique: true,
        required: [true,'Email obligatorio para registrarse'] 
    },
    password: {
        type: String,
        required: [true, 'Contraseña obligatoria para registrarse']
    },
    role: {
        type: String
    },
    tokens:[],
    companyProfile:[
        { companyName: String,
             CIF:{
                type: String,
                 // unique: true,
                  //required:[true, 'CIF  necesario para registrarse']
              //LO PONGO ASÍ PARA PRUEBAS, LUEGO HABRÁ QUE HACER QUE SEA DE UNA LONGITUD CONCRETA: 9 CARACTERES
              },
        typeCompany: {
            type: String,
            enum:[
                "Empresa individual",
                "Sociedad limitada (S.L.)",
                "Sociedad Anónima (S.A.)",
                "Asociación sin ánimo de lucro",
                "Sociedad Colectiva",
                "Sociedad Comanditaria",
                "Comunidad de Bienes",
                "Sociedad Cooperativa",
            ],
          //  required: [true, "Es obligatorio incluir el tipo de empresa"]
          },
          field:
          {
            type: String,
            enum:[
                "Sector primario",
                "Sector secundario",
                "Sector terciario",
                "Sector cuaternario",
                "Sector quinario",
            ],
         //   required: [true, "Es obligatorio incluir el sector al que pertenece"],
        },
        workersNumber: String,
        description: String,
        location: String,
        telephoneNumber: String,
        website: String,
        //Luego hacer que incluya .com/.es/.eus 
        createdOffers: [
    /*{ type: ObjectId, ref: "Offer" }*/
  ],
        likedTalents: [
            {
            //    type: ObjectId, ref:"Talent"
            }
        ]
    }
    ]
})

CompanySchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.tokens;
  delete user.password;
  return user;
};

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;