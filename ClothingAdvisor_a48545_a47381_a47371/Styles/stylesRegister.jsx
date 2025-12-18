import { StyleSheet, Dimensions } from 'react-native';

const styles3 = StyleSheet.create({
  selectListContainer: {
    width: "100%", // Adjust the width as needed
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    paddingVertical: 0,
    paddingHorizontal: 0,
  },

  SelectList: {
    position: "absolute",
    width: 281,
    height: 243,
    opacity: 1,
    top: 334,
  },
  
  //pic css
style_pictureicon_3: {
  position: "absolute",
  width: 75,
  height: 75,
  borderRadius: 0,
  opacity: 1,
  top:-10,
  left:0,
  backgroundColor: "rgba(0,0,0,0)",
},
  //main divs some unknow...
    style_Group_21: {
      position: "absolute",
      width: 295,
      height: 693,
      top:100,
      left:50,
      backgroundColor: "rgba(0,0,0,0)",
    },
    style_DivPrincipal: {
        position: "absolute",
        width: 395,
        height: 693,
        transform: [
          {
            translateX: 0
          },
          {
            translateY: -10
          },
          {
            rotate: "0deg"
          },
        ],
        overflow: "hidden",
        backgroundColor: "rgba(0,0,0,0)",
      },
      style_Rectangle_33: {
        position: "absolute",
        color: "rgba(255, 255, 255, 1)",
        width: 95,
        height: 43,
        borderRadius: 20,
        left: 0,
        right: "auto",
        top: 78,
        bottom: "auto",
        transform: [
          {
            translateX: 50
          },
          {
            translateY: 0
          },
          {
            rotate: "0deg"
          },
        ],
      },
      style_Rectangle_38: {
        position: "absolute",
        color: "rgba(255, 255, 255, 1)",
        width: 295,
        height: 43,
        borderRadius: 20,
        left: 0,
        right: "auto",
        top: 126,
        bottom: "auto",
        transform: [
          {
            translateX: 10
          },
          {
            translateY: 100
          },
          {
            rotate: "0deg"
          },
        ],
      },
      //css para o texto de os contentores
      style_Email: {
        position: "absolute",
        width: 250,
        height: "auto",
        left: 10,
        right: "auto",
        top: 13,   //hehe
        bottom: "auto",
        transform: [
          {
            translateX: 5
          },
          {
            translateY: 0
          },
          {
            rotate: "0deg"
          },
        ],
        textDecorationLine: "none",
        fontSize: 14,
        color: "rgba(196, 196, 196, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        letterSpacing: 0.1,
      },
      style_Username: {
        position: "absolute",
        width: 157,
        height: 17,
        left: 18,
        right: "auto",
        top: 13,
        bottom: "auto",
        transform: [
          { translateX: 0 },
          { translateY: 0 },
          { rotate: "0deg" }
        ],
        // "Varela-Round-regular",
       // //: 400,
        textDecorationLine: "none",
        fontSize: 14,
        color: "rgba(196, 196, 196, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        letterSpacing: 0.1
      },
      style_Password: {
        width: 157,
        height: 17,
        left: 15,
        right: 10,
        top: 12,
        fontSize: 14,
        letterSpacing: 0.1
      },

      style_ConfirmPassword: {
        width: 157,
        height: 17,
        left: 10,
        right: "auto",
        top: 12,
        bottom: "auto",
        fontSize: 14,
        color: "rgba(196, 196, 196, 1)",
        letterSpacing: 0.1
      },

      style_Localidade: {
        position: "absolute",
        width: 157,
        height: 17,
        left: 18,
        right: "auto",
        top: 10,
        bottom: "auto",
       
        
       // //: 400,
        textDecorationLine: "none",
        fontSize: 14,
        color: "rgba(196, 196, 196, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        letterSpacing: 0.1
      },
      style_Register: {
        position: "absolute",
        left: 80,
        top: 10,
        fontSize: 20,
        color: "rgba(42, 42, 42, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        letterSpacing: 0.1,
      },
      style_Register_12: {
        position: "absolute",
        left: 100,
        top: 10,
        fontSize: 20,
        color: "rgba(42, 42, 42, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        letterSpacing: 0.1,
      },
      style_SaveChanges: {
        left: 55,
        top: 10,
        fontSize: 20,
        color: "rgba(42, 42, 42, 1)",
        letterSpacing: 0.1,
      },
      style_Upload: {
        position: "absolute",
        width: "auto",
        height: "auto",
        left: 125,
        right: "auto",
        top: 45,
        bottom: "auto",
        transform: [
          { translateX: 58 },
          { translateY: -30 },
          { rotate: "0deg" },
        ],
        
        //: 500,
        textDecorationLine: "none",
        fontSize: 20,
        color: "rgba(42, 42, 42, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        letterSpacing: 0.1,
      },
      style_Apelido: {
        width: 120,
        left: 15,
        top: 10,
        fontSize: 14,
        color: "rgba(196, 196, 196, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        letterSpacing: 0.1,
      },
      style_Season: {
        position: "absolute",
        width: 120,
        left: 15,
        top: 5,
        fontSize: 14,
        color: "rgba(196, 196, 196, 1)",
        letterSpacing: 0.1,
      },
      style_Nome: {
        width: 100,
        left: 18,
        top: 5,
        fontSize: 14,
        color: "rgba(196, 196, 196, 1)",
        letterSpacing: 0.1,
      },
      style_Genero: {
        position: "relative",
        width: 200,
        height: "auto",
        left: 5,
        right: "auto",
        top: 0,   //hehe
        bottom: "auto",
        transform: [
          {
            translateX: 5
          },
          {
            translateY: 0
          },
          {
            rotate: "0deg"
          },
        ],
        
        //: 400,
        textDecorationLine: "none",
        fontSize: 14,
        color: "rgba(196, 196, 196, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        letterSpacing: 0.1,
      },
      //contentores pequenos
      style_RectanglePequeno: {
        position: "absolute",
        width: 141,
        height: 43,
        borderRadius: 20,
        opacity: 1,
        borderWidth: 1,
        borderColor: "rgba(196, 196, 196, 1)",
        left: 0,
        right: "auto",
        top: 174,
        bottom: "auto",
        backgroundColor: "rgba(255, 255, 255, 1)",
      },
      style_RectanglePequeno1: {
        position: "absolute",
        width: 141,
        height: 43,
        borderRadius: 20,
        opacity: 1,
        borderWidth: 1,
        borderColor: "rgba(196, 196, 196, 1)",
        left: 0,
        right: "auto",
        top: 174,
        bottom: "auto",
        transform: [
          {
            translateX: 150
          },
          {
            translateY: 0
          },
          {
            rotate: "0deg"
          },
        ],
        backgroundColor: "rgba(255, 255, 255, 1)",
      },
      style_RectanglePequeno1_1: {
        position: "absolute",
        width: 241,
        height: 43,
        borderRadius: 20,
        opacity: 1,
        borderWidth: 1,
        borderColor: "rgba(196, 196, 196, 1)",
        left: 70,
        right: "auto",
        top: 424,
        bottom: "auto",
        backgroundColor: "rgba(255, 255, 255, 1)",
      },
      style_RectanglePequeno2: {
        position: "absolute",
        width: 241,
        height: 43,
        borderRadius: 10,
        //opacity: 1,
        //borderWidth: 1,
        borderColor: "rgba(196, 196, 196, 1)",
        left: 0,
        right: "auto",
        top: 374,
        bottom: "auto",
        backgroundColor: "rgba(255, 255, 255, 1)",
      },
      style_RectanglePequeno4: {
        position: "absolute",
        width: 141,
        height: 43,
        borderRadius: 20,
        opacity: 1,
        borderWidth: 1,
        borderColor: "rgba(196, 196, 196, 1)",
        left: 0,
        right: "auto",
        top: 174,
        bottom: "auto",
        transform: [
          {
            translateX: 150
          },
          {
            translateY: 0
          },
          {
            rotate: "0deg"
          },
        ],
        backgroundColor: "rgba(255, 255, 255, 1)",
      },
      //contentores grandes
      style_Rectangle_40: {
        position: "absolute",
        width: 290,
        height: 43,
        borderRadius: 20,
        opacity: 1,
        borderWidth: 1,
        borderColor: "rgba(196, 196, 196, 1)",
        left: 0,
        right: "auto",
        top: 174,
        bottom: "auto",
        transform: [
          {
            translateX: 0
          },
          {
            translateY: 50
          },
          {
            rotate: "0deg"
          },
        ],
        backgroundColor: "rgba(255, 255, 255, 1)",
      },
      style_Rectangle_42: {
        position: "absolute",
        width: 290,
        height: 43,
        borderRadius: 20,
        opacity: 1,
        borderWidth: 1,
        borderColor: "rgba(196, 196, 196, 1)",
        top: 224,
        backgroundColor: "rgba(255, 255, 255, 1)",
      },
      style_RectangleGrande1: {
        position: "absolute",
        width: 290,
        height: 43,
        borderRadius: 20,
        opacity: 1,
        borderWidth: 1,
        borderColor: "rgba(196, 196, 196, 1)",
        top: 274,
        backgroundColor: "rgba(255, 255, 255, 1)",
      },
      style_RectangleGrande1_1: {
        position: "absolute",
        width: 241,
        height: 43,
        borderRadius: 20,
        opacity: 1,
        borderWidth: 1,
        borderColor: "rgba(196, 196, 196, 1)",
        left: 70,
        right: "auto",
        top: 324,
        bottom: "auto",
        backgroundColor: "rgba(255, 255, 255, 1)",
      },
      style_RectangleGrande2: {
        position: "absolute",
        width: 290,
        height: 43,
        borderRadius: 20,
        opacity: 1,
        borderWidth: 1,
        borderColor: "rgba(196, 196, 196, 1)",
        left: 0,
        right: "auto",
        top: -75,
        bottom: "auto",
        transform: [
          {
            translateX: 0
          },
          {
            translateY: 200
          },
          {
            rotate: "0deg"
          },
        ],
        backgroundColor: "rgba(255, 255, 255, 1)",
      },
      style_RectangleRegister: {
        position: "absolute",
        width: 286,
        height: 52,
        borderRadius: 20,
        opacity: 1,
        borderWidth: 2,
        borderColor: "rgba(42, 42, 42, 1)",
        right: "auto",
        top: 540,
        bottom: "auto",
        
        backgroundColor: "rgba(204, 153, 102, 1)",
      },
      style_RectangleRegister_12: {
        width: 286,
        height: 52,
        borderRadius: 20,
        opacity: 1,
        borderWidth: 2,
        borderColor: "rgba(42, 42, 42, 1)",
        left: 2,
        right: "auto",
        top: 560,
        bottom: "auto",
        
        backgroundColor: "rgba(204, 153, 102, 1)",
      },
      style_RectangleRegister_1: {
        width: 286,
        height: 52,
        borderRadius: 20,
        opacity: 1,
        borderWidth: 2,
        borderColor: "rgba(42, 42, 42, 1)",
        left: 52,
        top: 130,
        backgroundColor: "rgba(204, 153, 102, 1)",
      },
      style_RectangleUpload: {
        position: "absolute",
        width: 146,
        height: 52,
        borderRadius: 20,
        opacity: 1,
        borderWidth: 2,
        borderColor: "rgba(42, 42, 42, 1)",
        left: 0,
        right: "auto",
        top: 164,
        bottom: "auto",
        transform: [
          { translateX: 140 },
          { translateY: -160 },
          { rotate: "0deg" },
        ],
        backgroundColor: "rgba(204, 153, 102, 1)",
      },
      style_RectangleGrande3: {
        position: "absolute",
        width: 286,
        height: 44,
        borderRadius: 20,
        opacity: 1,
        borderWidth: 1,
        borderColor: "rgba(196, 196, 196, 1)",
        left: 0,
        right: "auto",
        top: 72,
        bottom: "auto",
        backgroundColor: "rgba(255, 255, 255, 1)"
      },

      buttonUploadPicture: {
        position:"relative",
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 20,
        right:0,
        top:0,
        width:120,
        height:60,
        left:165,
      },

});  
export default styles3;