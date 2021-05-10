import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_3854_3102}>
        <View style={styles.View_3854_3103} />
      </View>
      <View style={styles.View_3854_3104}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/701b/e25a/ff00eca9196f117f3830b0fe2d9a4788"
          }}
          style={styles.ImageBackground_3854_3105}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfad/c9bb/8b2c4b62c69ee3ff0208fa0fff059073"
        }}
        style={styles.ImageBackground_3854_3106}
      />
      <View style={styles.View_3854_3107}>
        <View style={styles.View_3854_3108} />
        <View style={styles.View_3854_3109}>
          <View style={styles.View_3854_3110}>
            <View style={styles.View_3854_3111} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_3854_3112}
            />
            <View style={styles.View_3854_3113} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47f5/7015/5868429ee0bb3d36311c149c359f6a6d"
            }}
            style={styles.ImageBackground_3854_3114}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69b2/60c6/1cd75741003fc62368cc7053e63fa430"
            }}
            style={styles.ImageBackground_3854_3118}
          />
          <View style={styles.View_3854_3123}>
            <View style={styles.View_3854_3124}>
              <Text style={styles.Text_3854_3124}>9:41</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3854_3125}>
          <Text style={styles.Text_3854_3125}>Messages</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e29/4c21/b46d31533680cd2e637bdbb3ac097b47"
          }}
          style={styles.ImageBackground_3854_3126}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b7a/859a/3a6bedd7ed72af686889546456bf9a32"
          }}
          style={styles.ImageBackground_3854_3129}
        />
      </View>
      <View style={styles.View_3854_3133}>
        <Text style={styles.Text_3854_3133}>Messages</Text>
      </View>
      <View style={styles.View_3854_3134}>
        <Text style={styles.Text_3854_3134}>Special Interests</Text>
      </View>
      <View style={styles.View_3854_3135} />
      <View style={styles.View_3854_3136}>
        <View style={styles.View_3854_3137} />
        <View style={styles.View_3854_3138}>
          <View style={styles.View_3854_3139}>
            <Text style={styles.Text_3854_3139}>Nancy Jones </Text>
          </View>
          <View style={styles.View_3854_3140}>
            <Text style={styles.Text_3854_3140}>
              Vocal Artist would like to collaborate with you!
            </Text>
          </View>
          <View style={styles.View_3854_3141}>
            <Text style={styles.Text_3854_3141}>Collab Invitation</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6def/ded3/45dc6426e3b0773ad8457679f7cf70a4"
            }}
            style={styles.ImageBackground_3854_3142}
          />
        </View>
      </View>
      <View style={styles.View_3854_3143}>
        <View style={styles.View_3854_3144} />
        <View style={styles.View_3854_3145}>
          <View style={styles.View_3854_3146}>
            <Text style={styles.Text_3854_3146}>Matt Witter</Text>
          </View>
          <View style={styles.View_3854_3147}>
            <Text style={styles.Text_3854_3147}>
              You: indicates your response message to Matt. That way preview
              shows you last responded. Also after one week, use Month and Day.
            </Text>
          </View>
          <View style={styles.View_3854_3148}>
            <Text style={styles.Text_3854_3148}>Sept 25</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eab3/8639/89ae515c6bfe4a24284e41cd2b82702d"
            }}
            style={styles.ImageBackground_3854_3149}
          />
        </View>
      </View>
      <View style={styles.View_3854_3150}>
        <View style={styles.View_3854_3151} />
        <View style={styles.View_3854_3152}>
          <View style={styles.View_3854_3153}>
            <Text style={styles.Text_3854_3153}>Ted Williams</Text>
          </View>
          <View style={styles.View_3854_3154}>
            <Text style={styles.Text_3854_3154}>
              Guitar Artist would like to learn from you!
            </Text>
          </View>
          <View style={styles.View_3854_3155}>
            <Text style={styles.Text_3854_3155}>Learn Invitation</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e17/3a08/fa8a6d0ec53a533f561b47ad1cbb4510"
            }}
            style={styles.ImageBackground_3854_3156}
          />
        </View>
      </View>
      <View style={styles.View_3854_3157}>
        <View style={styles.View_3854_3158} />
        <View style={styles.View_3854_3159}>
          <View style={styles.View_3854_3160}>
            <Text style={styles.Text_3854_3160}>Matt Witter</Text>
          </View>
          <View style={styles.View_3854_3161}>
            <Text style={styles.Text_3854_3161}>
              You: indicates your response message to Matt. That way preview
              shows you last responded. Also after one week, use Month and Day.
            </Text>
          </View>
          <View style={styles.View_3854_3162}>
            <Text style={styles.Text_3854_3162}>Sept 25</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eab3/8639/89ae515c6bfe4a24284e41cd2b82702d"
            }}
            style={styles.ImageBackground_3854_3163}
          />
        </View>
      </View>
      <View style={styles.View_3854_3164}>
        <View style={styles.View_3854_3165} />
        <View style={styles.View_3854_3166}>
          <View style={styles.View_3854_3167}>
            <Text style={styles.Text_3854_3167}>Matt Witter</Text>
          </View>
          <View style={styles.View_3854_3168}>
            <Text style={styles.Text_3854_3168}>
              You: indicates your response message to Matt. That way preview
              shows you last responded. Also after one week, use Month and Day.
            </Text>
          </View>
          <View style={styles.View_3854_3169}>
            <Text style={styles.Text_3854_3169}>Sept 25</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eab3/8639/89ae515c6bfe4a24284e41cd2b82702d"
            }}
            style={styles.ImageBackground_3854_3170}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b69/a8af/0fad92dc5eaaddbc7b46df722ae74df9"
        }}
        style={styles.ImageBackground_3854_3171}
      />
      <View style={styles.View_3854_3174}>
        <Text style={styles.Text_3854_3174}>Search Messages</Text>
      </View>
      <View style={styles.View_3854_3175}>
        <View style={styles.View_3854_3176} />
        <View style={styles.View_3854_3177}>
          <View style={styles.View_3854_3178}>
            <Text style={styles.Text_3854_3178}>Matt Witter</Text>
          </View>
          <View style={styles.View_3854_3179}>
            <Text style={styles.Text_3854_3179}>
              Hey Jason! I am free at 12pm next weekend if that works for you.
              What will we be playing by any chance?
            </Text>
          </View>
          <View style={styles.View_3854_3180}>
            <Text style={styles.Text_3854_3180}>Invitation Accepted</Text>
          </View>
          <View style={styles.View_3854_3181}>
            <Text style={styles.Text_3854_3181}>Fri</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eab3/8639/89ae515c6bfe4a24284e41cd2b82702d"
            }}
            style={styles.ImageBackground_3854_3182}
          />
        </View>
      </View>
      <View style={styles.View_3854_3183}>
        <View style={styles.View_3854_3184} />
        <View style={styles.View_3854_3185}>
          <View style={styles.View_3854_3186}>
            <Text style={styles.Text_3854_3186}>Matt Witter</Text>
          </View>
          <View style={styles.View_3854_3187}>
            <Text style={styles.Text_3854_3187}>
              Message preview goes here for only two lines and is left
              justified. Here Matt is responding back to this Jason (this user).
            </Text>
          </View>
          <View style={styles.View_3854_3188}>
            <Text style={styles.Text_3854_3188}>Unread</Text>
          </View>
          <View style={styles.View_3854_3189}>
            <Text style={styles.Text_3854_3189}>Wed</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eab3/8639/89ae515c6bfe4a24284e41cd2b82702d"
            }}
            style={styles.ImageBackground_3854_3190}
          />
        </View>
      </View>
      <View style={styles.View_3854_3191}>
        <View style={styles.View_3854_3192} />
        <View style={styles.View_3854_3193}>
          <View style={styles.View_3854_3194}>
            <Text style={styles.Text_3854_3194}>Matt Witter</Text>
          </View>
          <View style={styles.View_3854_3195}>
            <Text style={styles.Text_3854_3195}>
              You: indicates your response message to Matt. That way preview
              shows you last responded. Also after one week, use Month and Day.
            </Text>
          </View>
          <View style={styles.View_3854_3196}>
            <Text style={styles.Text_3854_3196}>Sept 25</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eab3/8639/89ae515c6bfe4a24284e41cd2b82702d"
            }}
            style={styles.ImageBackground_3854_3197}
          />
        </View>
      </View>
      <View style={styles.View_3854_3198}>
        <View style={styles.View_3854_3199} />
        <View style={styles.View_3854_3200} />
        <View style={styles.View_3854_3201}>
          <View style={styles.View_3854_3202}>
            <Text style={styles.Text_3854_3202}>Matt Witter</Text>
          </View>
          <View style={styles.View_3854_3203}>
            <Text style={styles.Text_3854_3203}>
              You: indicates your response message to Matt. That way preview
              shows you last responded. Also after one week, use Month and Day.
            </Text>
          </View>
          <View style={styles.View_3854_3204}>
            <Text style={styles.Text_3854_3204}>Sept 25</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eab3/8639/89ae515c6bfe4a24284e41cd2b82702d"
            }}
            style={styles.ImageBackground_3854_3205}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2bf/a681/a94c491c67d6ad946da5363959e611be"
        }}
        style={styles.ImageBackground_3854_3207}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2bf/a681/a94c491c67d6ad946da5363959e611be"
        }}
        style={styles.ImageBackground_3854_3210}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2bf/a681/a94c491c67d6ad946da5363959e611be"
        }}
        style={styles.ImageBackground_3854_3213}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7179/ee27/64f2b0ab87518076858981b3bbe41e61"
        }}
        style={styles.ImageBackground_3854_3216}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec28/ae69/2307dc84f7002de75ece5a97b4c9f9d8"
        }}
        style={styles.ImageBackground_3854_3219}
      />
      <View style={styles.View_3854_3220}>
        <Text style={styles.Text_3854_3220}>Delete</Text>
      </View>
      <View style={styles.View_3854_3221}>
        <View style={styles.View_3854_3222} />
        <View style={styles.View_3854_3223}>
          <View style={styles.View_3854_3224}>
            <Text style={styles.Text_3854_3224}>Matt Witter</Text>
          </View>
          <View style={styles.View_3854_3225}>
            <Text style={styles.Text_3854_3225}>
              You: indicates your response message to Matt. That way preview
              shows you last responded. Also after one week, use Month and Day.
            </Text>
          </View>
          <View style={styles.View_3854_3226}>
            <Text style={styles.Text_3854_3226}>Sept 25</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eab3/8639/89ae515c6bfe4a24284e41cd2b82702d"
            }}
            style={styles.ImageBackground_3854_3227}
          />
        </View>
      </View>
      <View style={styles.View_3854_3228}>
        <View style={styles.View_3854_3229} />
      </View>
      <View style={styles.View_3854_3230}>
        <View style={styles.View_3854_3231} />
      </View>
      <View style={styles.View_3854_3232} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efe3/ee06/c22aacd68010bb48dcb0ec541504240b"
        }}
        style={styles.ImageBackground_3854_3233}
      />
      <View style={styles.View_3854_3237}>
        <Text style={styles.Text_3854_3237}>More</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9af/9999/7819cfcc4411645ec38e379a68ef38bc"
        }}
        style={styles.ImageBackground_3854_3238}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_3854_3102: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("101.36612021857923%"),
    minHeight: hp("101.36612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666666666%"),
    top: hp("9.426229508196721%")
  },
  View_3854_3103: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("101.36612021857923%"),
    minHeight: hp("101.36612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 240, 240, 1)"
  },
  View_3854_3104: {
    width: wp("100%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3854_3105: {
    width: wp("100%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3854_3106: {
    width: wp("14.399999999999999%"),
    height: hp("3.547538694788198%"),
    top: hp("5.8669793801229515%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    resizeMode: "cover"
  },
  View_3854_3107: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3854_3108: {
    width: wp("100%"),
    height: hp("11.612021857923498%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3854_3109: {
    width: wp("100%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3854_3110: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.68880208333333%"),
    top: hp("2.231285220286885%")
  },
  View_3854_3111: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_3854_3112: {
    width: wp("0.3541434605916341%"),
    minWidth: wp("0.3541434605916341%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.13333333333334%"),
    top: hp("0.500888511782787%")
  },
  View_3854_3113: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    minHeight: hp("1.0018215153386685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333456%"),
    top: hp("0.2732240437158473%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_3854_3114: {
    width: wp("4.088883463541667%"),
    height: hp("1.434424666107678%"),
    top: hp("2.1296266649590163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%")
  },
  ImageBackground_3854_3118: {
    width: wp("4.533333333333333%"),
    height: hp("1.3909608288540867%"),
    top: hp("2.1733852032103824%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%")
  },
  View_3854_3123: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("0.819672131147541%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3854_3124: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054644%")
  },
  Text_3854_3124: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_3854_3125: {
    width: wp("28.26666666666667%"),
    top: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  Text_3854_3125: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_3854_3126: {
    width: wp("5.333366902669271%"),
    height: hp("2.729027649092544%"),
    top: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%")
  },
  ImageBackground_3854_3129: {
    width: wp("4.266666666666667%"),
    height: hp("0.546448087431694%"),
    top: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.80000000000001%")
  },
  View_3854_3133: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333333%"),
    top: hp("39.34426229508197%")
  },
  Text_3854_3133: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_3854_3134: {
    width: wp("28.26666666666667%"),
    minWidth: wp("28.26666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333333%"),
    top: hp("19.398907103825135%")
  },
  Text_3854_3134: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_3854_3135: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("13.387978142076504%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(233, 233, 233, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 7.976744174957275,
    borderTopRightRadius: 7.976744174957275,
    borderBottomLeftRadius: 7.976744174957275,
    borderBottomRightRadius: 7.976744174957275
  },
  View_3854_3136: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.6775956284153%")
  },
  View_3854_3137: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3854_3138: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("0%")
  },
  View_3854_3139: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666668%"),
    top: hp("0.6830601092896202%")
  },
  Text_3854_3139: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_3854_3140: {
    width: wp("54.13333333333333%"),
    minWidth: wp("54.13333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666668%"),
    top: hp("2.5956284153005456%")
  },
  Text_3854_3140: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_3854_3141: {
    width: wp("20.8%"),
    minWidth: wp("20.8%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.39999999999999%"),
    top: hp("0%")
  },
  Text_3854_3141: {
    color: "rgba(66, 157, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_3854_3142: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896202%")
  },
  View_3854_3143: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("79.91803278688525%")
  },
  View_3854_3144: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3854_3145: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("1.0928961748633839%")
  },
  View_3854_3146: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666668%"),
    top: hp("0%")
  },
  Text_3854_3146: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_3854_3147: {
    width: wp("81.33333333333333%"),
    minWidth: wp("81.33333333333333%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666668%"),
    top: hp("3.0054644808743234%")
  },
  Text_3854_3147: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_3854_3148: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.6%"),
    top: hp("0%")
  },
  Text_3854_3148: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_3854_3149: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3854_3150: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.010928961748636%")
  },
  View_3854_3151: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579212%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3854_3152: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("0%")
  },
  View_3854_3153: {
    width: wp("22.133333333333333%"),
    minWidth: wp("22.133333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666668%"),
    top: hp("0.8196721311475414%")
  },
  Text_3854_3153: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_3854_3154: {
    width: wp("47.46666666666667%"),
    minWidth: wp("47.46666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666668%"),
    top: hp("2.732240437158463%")
  },
  Text_3854_3154: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_3854_3155: {
    width: wp("17.866666666666667%"),
    minWidth: wp("17.866666666666667%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.33333333333333%"),
    top: hp("0%")
  },
  Text_3854_3155: {
    color: "rgba(66, 157, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_3854_3156: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%")
  },
  View_3854_3157: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("89.34426229508196%")
  },
  View_3854_3158: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3854_3159: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("1.092896174863398%")
  },
  View_3854_3160: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666668%"),
    top: hp("0%")
  },
  Text_3854_3160: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_3854_3161: {
    width: wp("81.33333333333333%"),
    minWidth: wp("81.33333333333333%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666668%"),
    top: hp("3.0054644808743234%")
  },
  Text_3854_3161: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_3854_3162: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.6%"),
    top: hp("0%")
  },
  Text_3854_3162: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_3854_3163: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3854_3164: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("98.77049180327869%")
  },
  View_3854_3165: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3854_3166: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("1.092896174863398%")
  },
  View_3854_3167: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666668%"),
    top: hp("0%")
  },
  Text_3854_3167: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_3854_3168: {
    width: wp("81.33333333333333%"),
    minWidth: wp("81.33333333333333%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666668%"),
    top: hp("3.0054644808743234%")
  },
  Text_3854_3168: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_3854_3169: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.6%"),
    top: hp("0%")
  },
  Text_3854_3169: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_3854_3170: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3854_3171: {
    width: wp("4.533159383138021%"),
    height: hp("2.322403329317687%"),
    top: hp("14.617486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%")
  },
  View_3854_3174: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.4%"),
    top: hp("14.754098360655737%")
  },
  Text_3854_3174: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3854_3175: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41.939890710382514%")
  },
  View_3854_3176: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158495%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3854_3177: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("0%")
  },
  View_3854_3178: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666668%"),
    top: hp("1.3661202185792334%")
  },
  Text_3854_3178: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_3854_3179: {
    width: wp("81.33333333333333%"),
    minWidth: wp("81.33333333333333%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666668%"),
    top: hp("4.37158469945355%")
  },
  Text_3854_3179: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_3854_3180: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.79999999999998%"),
    top: hp("0%")
  },
  Text_3854_3180: {
    color: "rgba(66, 157, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_3854_3181: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("1.3661202185792334%")
  },
  Text_3854_3181: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_3854_3182: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792334%")
  },
  View_3854_3183: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51.63934426229508%")
  },
  View_3854_3184: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3854_3185: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("0.4098360655737636%")
  },
  View_3854_3186: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666668%"),
    top: hp("0.6830601092896273%")
  },
  Text_3854_3186: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_3854_3187: {
    width: wp("81.33333333333333%"),
    minWidth: wp("81.33333333333333%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666668%"),
    top: hp("3.6885245901639365%")
  },
  Text_3854_3187: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_3854_3188: {
    width: wp("26.400000000000002%"),
    minWidth: wp("26.400000000000002%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.8%"),
    top: hp("0%")
  },
  Text_3854_3188: {
    color: "rgba(66, 157, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_3854_3189: {
    width: wp("5.6000000000000005%"),
    minWidth: wp("5.6000000000000005%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6%"),
    top: hp("0.6830601092896273%")
  },
  Text_3854_3189: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_3854_3190: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896273%")
  },
  View_3854_3191: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("61.065573770491795%")
  },
  View_3854_3192: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3854_3193: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("1.092896174863391%")
  },
  View_3854_3194: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666668%"),
    top: hp("0%")
  },
  Text_3854_3194: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_3854_3195: {
    width: wp("81.33333333333333%"),
    minWidth: wp("81.33333333333333%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666668%"),
    top: hp("3.0054644808743163%")
  },
  Text_3854_3195: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_3854_3196: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.6%"),
    top: hp("0%")
  },
  Text_3854_3196: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_3854_3197: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3854_3198: {
    width: wp("128.26664225260416%"),
    minWidth: wp("128.26664225260416%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%"),
    top: hp("70.49180327868852%")
  },
  View_3854_3199: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3854_3200: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("114.13333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 52, 52, 1)"
  },
  View_3854_3201: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("1.092896174863398%")
  },
  View_3854_3202: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666666%"),
    top: hp("0%")
  },
  Text_3854_3202: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_3854_3203: {
    width: wp("81.33333333333333%"),
    minWidth: wp("81.33333333333333%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666666%"),
    top: hp("3.005464480874309%")
  },
  Text_3854_3203: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_3854_3204: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.6%"),
    top: hp("0%")
  },
  Text_3854_3204: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_3854_3205: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3854_3207: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333334%"),
    top: hp("24.043715846994534%")
  },
  ImageBackground_3854_3210: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333334%"),
    top: hp("32.51366120218579%")
  },
  ImageBackground_3854_3213: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666667%"),
    top: hp("43.98907103825137%")
  },
  ImageBackground_3854_3216: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333334%"),
    top: hp("53.278688524590166%")
  },
  ImageBackground_3854_3219: {
    width: wp("4.927999877929688%"),
    height: hp("2.9070961019380497%"),
    top: hp("73.40981738814891%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("118.93333333333334%")
  },
  View_3854_3220: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("117.6%"),
    top: hp("76.63934426229508%")
  },
  Text_3854_3220: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_3854_3221: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("108.06010928961749%")
  },
  View_3854_3222: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3854_3223: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("1.092896174863398%")
  },
  View_3854_3224: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666668%"),
    top: hp("0%")
  },
  Text_3854_3224: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_3854_3225: {
    width: wp("81.33333333333333%"),
    minWidth: wp("81.33333333333333%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666668%"),
    top: hp("3.005464480874309%")
  },
  Text_3854_3225: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_3854_3226: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.6%"),
    top: hp("0%")
  },
  Text_3854_3226: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_3854_3227: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3854_3228: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("17.759562841530055%"),
    minHeight: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("93.5792349726776%")
  },
  View_3854_3229: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("17.759562841530055%"),
    minHeight: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3854_3230: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("106.28415300546447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3854_3231: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_3854_3232: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("100.26666666666667%"),
    top: hp("70.49180327868852%"),
    backgroundColor: "rgba(9, 10, 10, 1)"
  },
  ImageBackground_3854_3233: {
    width: wp("4.266666666666667%"),
    height: hp("0.546448087431694%"),
    top: hp("74.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("105.06666666666666%")
  },
  View_3854_3237: {
    width: wp("6.133333333333333%"),
    minWidth: wp("6.133333333333333%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("104%"),
    top: hp("76.63934426229508%")
  },
  Text_3854_3237: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_3854_3238: {
    width: wp("2.666666666666667%"),
    height: hp("2.319543348635481%"),
    top: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333333%")
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
