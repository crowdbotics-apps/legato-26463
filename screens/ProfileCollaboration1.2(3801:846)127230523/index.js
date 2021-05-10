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
      <View style={styles.View_3801_847} />
      <View style={styles.View_3801_848} />
      <View style={styles.View_3801_850} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e16/c1db/23596d4af4f60b2fad83a08fb8913e15"
        }}
        style={styles.ImageBackground_3801_851}
      />
      <View style={styles.View_3801_852} />
      <View style={styles.View_3801_853}>
        <View style={styles.View_3801_854} />
      </View>
      <View style={styles.View_3801_855}>
        <View style={styles.View_3801_856}>
          <View style={styles.View_3801_857} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_3801_858}
          />
          <View style={styles.View_3801_859} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a81/a486/e97c58eda055bd0cc4f2bec410cc0ee3"
          }}
          style={styles.ImageBackground_3801_860}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
          }}
          style={styles.ImageBackground_3801_864}
        />
        <View style={styles.View_3801_869}>
          <View style={styles.View_3801_870}>
            <Text style={styles.Text_3801_870}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3801_871}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/701b/e25a/ff00eca9196f117f3830b0fe2d9a4788"
          }}
          style={styles.ImageBackground_3801_872}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa16/e092/330eb8640807dba74efb6b129ecbeebd"
        }}
        style={styles.ImageBackground_3801_873}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa16/e092/330eb8640807dba74efb6b129ecbeebd"
        }}
        style={styles.ImageBackground_3801_874}
      />
      <View style={styles.View_3801_875}>
        <Text style={styles.Text_3801_875}>50+</Text>
      </View>
      <View style={styles.View_3801_878}>
        <Text style={styles.Text_3801_878}>Nancy Jones</Text>
      </View>
      <View style={styles.View_3801_879}>
        <Text style={styles.Text_3801_879}>Vocal Artist</Text>
      </View>
      <View style={styles.View_3801_888}>
        <View style={styles.View_3801_889}>
          <Text style={styles.Text_3801_889}>Recommendations</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b4c/718c/a093951221f3bbc7f6dc832744e004f3"
          }}
          style={styles.ImageBackground_3801_890}
        />
        <View style={styles.View_3801_891}>
          <View style={styles.View_3801_892}>
            <Text style={styles.Text_3801_892}>Chuck Owen</Text>
          </View>
          <View style={styles.View_3801_893}>
            <Text style={styles.Text_3801_893}>Saxophonist</Text>
          </View>
          <View style={styles.View_3801_894}>
            <Text style={styles.Text_3801_894}>
              This girl has pipes. We performed at a fund raiser and
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3861_2936}>
        <View style={styles.View_3801_849} />
        <View style={styles.View_3801_895}>
          <View style={styles.View_3801_896}>
            <Text style={styles.Text_3801_896}>Spotify</Text>
          </View>
          <View style={styles.View_3801_897}>
            <View style={styles.View_3801_898}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22db/4dd9/d91e4ca6df1ea0c6faa2c2fa1b402d4c"
                }}
                style={styles.ImageBackground_3801_899}
              />
              <View style={styles.View_3801_900} />
              <View style={styles.View_3801_901}>
                <Text style={styles.Text_3801_901}>Pick Up</Text>
              </View>
              <View style={styles.View_3801_902}>
                <Text style={styles.Text_3801_902}>Now Playing</Text>
              </View>
              <View style={styles.View_3801_903}>
                <Text style={styles.Text_3801_903}>Demo Track</Text>
              </View>
            </View>
            <View style={styles.View_3801_904}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb21/aec5/73d830e661ba56d70a8b137ec2b9e1f2"
                }}
                style={styles.ImageBackground_3801_905}
              />
              <View style={styles.View_3801_906}>
                <Text style={styles.Text_3801_906}>Acoustic</Text>
              </View>
              <View style={styles.View_3801_907}>
                <Text style={styles.Text_3801_907}>Precious</Text>
              </View>
            </View>
            <View style={styles.View_3801_908}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65a6/dff3/2cfd634a5e85b809b65ec1c6565ba3f0"
                }}
                style={styles.ImageBackground_3801_909}
              />
              <View style={styles.View_3801_910}>
                <Text style={styles.Text_3801_910}>Album Track</Text>
              </View>
              <View style={styles.View_3801_911}>
                <Text style={styles.Text_3801_911}>Havana</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3801_1780}>
        <View style={styles.View_3801_1781}>
          <View style={styles.View_3801_1782} />
        </View>
        <View style={styles.View_3801_1783}>
          <Text style={styles.Text_3801_1783}>Pick Up</Text>
        </View>
        <View style={styles.View_3801_1784}>
          <Text style={styles.Text_3801_1784}>Nancy Jones Demo Track </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c44/6af6/278185603626e92293dabefd1e519e42"
          }}
          style={styles.ImageBackground_3801_1785}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59ee/9ad9/a55b902fb1c3a1c9458533295b6e0a17"
          }}
          style={styles.ImageBackground_3801_1786}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8bd/4b30/899969b9aaf031713560b9371848a940"
          }}
          style={styles.ImageBackground_3801_1787}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c90/9aff/607afb1fff4d2119edfca73bf29dd80b"
          }}
          style={styles.ImageBackground_3801_1788}
        />
      </View>
      <View style={styles.View_3801_913}>
        <View style={styles.View_3801_914} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0309/affb/ad762870bba8ad59108f35df8eb08c58"
          }}
          style={styles.ImageBackground_3801_915}
        />
        <View style={styles.View_3801_918}>
          <View style={styles.View_3801_919} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ed2/ac90/f6cf859cc7698d90ba1a85f769016601"
          }}
          style={styles.ImageBackground_3801_920}
        />
        <View style={styles.View_3801_922}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2a3/8219/0d0a44681ad90f675e710b885a461c6c"
            }}
            style={styles.ImageBackground_3801_923}
          />
        </View>
        <View style={styles.View_3801_926}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b54/3b33/4b13d515d4e3b8839fa786c1ab4dcbd0"
            }}
            style={styles.ImageBackground_3801_927}
          />
          <View style={styles.View_3801_928}>
            <Text style={styles.Text_3801_928}>14</Text>
          </View>
        </View>
        <View style={styles.View_3801_929}>
          <Text style={styles.Text_3801_929}>Alerts</Text>
        </View>
        <View style={styles.View_3801_930}>
          <Text style={styles.Text_3801_930}>Message</Text>
        </View>
        <View style={styles.View_3801_931}>
          <Text style={styles.Text_3801_931}>Search</Text>
        </View>
      </View>
      <View style={styles.View_3801_932}>
        <View style={styles.View_3801_933}>
          <View style={styles.View_3801_934} />
          <View style={styles.View_3801_935}>
            <Text style={styles.Text_3801_935}>About Me</Text>
          </View>
        </View>
        <View style={styles.View_3801_936}>
          <View style={styles.View_3801_937} />
          <View style={styles.View_3801_938}>
            <Text style={styles.Text_3801_938}>My Work</Text>
          </View>
        </View>
        <View style={styles.View_3801_939}>
          <View style={styles.View_3801_940} />
          <View style={styles.View_3801_941}>
            <Text style={styles.Text_3801_941}>Activity Log</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bc4/30bb/7c766f9e9ca2874d40ef24668ad6ba6c"
        }}
        style={styles.ImageBackground_3801_942}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bc4/30bb/7c766f9e9ca2874d40ef24668ad6ba6c"
        }}
        style={styles.ImageBackground_3801_943}
      />
      <View style={styles.View_3801_944}>
        <View style={styles.View_3801_945} />
        <View style={styles.View_3801_946}>
          <View style={styles.View_3801_947}>
            <Text style={styles.Text_3801_947}>Youtube</Text>
          </View>
          <View style={styles.View_3801_948}>
            <View style={styles.View_3801_949}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59e9/a171/c9705d390a1484c8be0c7cb7b150f464"
                }}
                style={styles.ImageBackground_3801_950}
              />
              <View style={styles.View_3801_951}>
                <Text style={styles.Text_3801_951}>Pick Up (Live)</Text>
              </View>
              <View style={styles.View_3801_952}>
                <Text style={styles.Text_3801_952}>Open Sessions</Text>
              </View>
            </View>
            <View style={styles.View_3801_953}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f74/f9a6/0dae8cffac1e121669e52d89bb1c56f6"
                }}
                style={styles.ImageBackground_3801_954}
              />
              <View style={styles.View_3801_955}>
                <Text style={styles.Text_3801_955}>Club Performance</Text>
              </View>
              <View style={styles.View_3801_956}>
                <Text style={styles.Text_3801_956}>Take Me On</Text>
              </View>
            </View>
            <View style={styles.View_3801_957}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91e2/71f6/f705c0b2b273b84a61601ef92ee88850"
                }}
                style={styles.ImageBackground_3801_958}
              />
              <View style={styles.View_3801_959}>
                <Text style={styles.Text_3801_959}>Secondary Info</Text>
              </View>
              <View style={styles.View_3801_960}>
                <Text style={styles.Text_3801_960}>Video Name</Text>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bc4/30bb/7c766f9e9ca2874d40ef24668ad6ba6c"
          }}
          style={styles.ImageBackground_3801_961}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bc4/30bb/7c766f9e9ca2874d40ef24668ad6ba6c"
          }}
          style={styles.ImageBackground_3801_962}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bc4/30bb/7c766f9e9ca2874d40ef24668ad6ba6c"
          }}
          style={styles.ImageBackground_3801_963}
        />
      </View>
      <View style={styles.View_3801_2168}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e61d/3785/23f9f49b82c25c78a96672b48c34fd5b"
          }}
          style={styles.ImageBackground_3801_2169}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4365/6433/1c630b03189b29e34964d9fadec21910"
          }}
          style={styles.ImageBackground_3801_2170}
        />
      </View>
      <View style={styles.View_3801_2171}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36e5/1841/009680b0db1831ab6b3c89f0db11ae66"
          }}
          style={styles.ImageBackground_3801_2172}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58bc/a2b0/5cbbc8ad9329c31582d26561cf8629f6"
          }}
          style={styles.ImageBackground_3801_2173}
        />
      </View>
      <View style={styles.View_3861_2628}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c62a/64b8/074eb65db9f11a809390a67e8282b31a"
          }}
          style={styles.ImageBackground_3861_2629}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f4/db7f/ea7869d80c450ef645f7a27dabceb6c8"
          }}
          style={styles.ImageBackground_3861_2630}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_3801_847: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(237, 237, 237, 1)"
  },
  View_3801_848: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.568306010928962%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28.688524590163933%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3801_850: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16.939890710382514%"),
    minHeight: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("85.65573770491804%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_3801_851: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("36.0655737704918%"),
    minHeight: hp("36.0655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_3801_852: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("36.0655737704918%"),
    minHeight: hp("36.0655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_3801_853: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106.28415300546447%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3801_854: {
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
  View_3801_855: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3801_856: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.68893229166667%"),
    top: hp("2.367947270961407%")
  },
  View_3801_857: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  ImageBackground_3801_858: {
    width: wp("0.3541434605916341%"),
    minWidth: wp("0.3541434605916341%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%"),
    top: hp("0.5009051880549862%")
  },
  View_3801_859: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    minHeight: hp("1.0018215153386685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    top: hp("0.27322404371584685%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_3801_860: {
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%")
  },
  ImageBackground_3801_864: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413473494065915%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%")
  },
  View_3801_869: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("0.9562841530054645%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3801_870: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054645%")
  },
  Text_3801_870: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_3801_871: {
    width: wp("100%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3801_872: {
    width: wp("100%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3801_873: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-22.021874999999998%"),
    top: hp("-5.82975794057377%")
  },
  ImageBackground_3801_874: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("130.1109375%"),
    top: hp("41.348750213456285%")
  },
  View_3801_875: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.86666666666666%"),
    top: hp("71.03825136612022%")
  },
  Text_3801_875: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_3801_878: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("30.327868852459016%")
  },
  Text_3801_878: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3801_879: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("33.46994535519126%")
  },
  Text_3801_879: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3801_888: {
    width: wp("90.93333333333334%"),
    minWidth: wp("90.93333333333334%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("104.37158469945356%")
  },
  View_3801_889: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3801_889: {
    color: "rgba(70, 68, 68, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3801_890: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.1420765027322375%"),
    resizeMode: "cover",
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45
  },
  View_3801_891: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333332%"),
    top: hp("3.1420765027322375%")
  },
  View_3801_892: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3801_892: {
    color: "rgba(7, 7, 7, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3801_893: {
    width: wp("17.866666666666667%"),
    minWidth: wp("17.866666666666667%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.1420765027322375%")
  },
  Text_3801_893: {
    color: "rgba(7, 7, 7, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3801_894: {
    width: wp("76%"),
    minWidth: wp("76%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.874316939890704%")
  },
  Text_3801_894: {
    color: "rgba(7, 7, 7, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3861_2936: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("41.66666666666667%"),
    minHeight: hp("41.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("67.89617486338798%")
  },
  View_3801_849: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("41.66666666666667%"),
    minHeight: hp("41.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3801_895: {
    width: wp("94.13333333333334%"),
    minWidth: wp("94.13333333333334%"),
    height: hp("23.08743169398907%"),
    minHeight: hp("23.08743169398907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("1.229508196721298%")
  },
  View_3801_896: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3801_896: {
    color: "rgba(70, 68, 68, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3801_897: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("19.53551912568306%"),
    minHeight: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999994%"),
    top: hp("3.5519125683060224%")
  },
  View_3801_898: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("19.53551912568306%"),
    minHeight: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3801_899: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("14.0419235646399%"),
    minHeight: hp("14.0419235646399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 6.426229476928711,
    borderTopRightRadius: 6.426229476928711,
    borderBottomLeftRadius: 6.426229476928711,
    borderBottomRightRadius: 6.426229476928711
  },
  View_3801_900: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("14.0419235646399%"),
    minHeight: hp("14.0419235646399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(15, 15, 15, 1)",
    opacity: 0.5,
    borderTopLeftRadius: 6.426229476928711,
    borderTopRightRadius: 6.426229476928711,
    borderBottomLeftRadius: 6.426229476928711,
    borderBottomRightRadius: 6.426229476928711
  },
  View_3801_901: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.300546448087431%")
  },
  Text_3801_901: {
    color: "rgba(89, 89, 89, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3801_902: {
    width: wp("20.8%"),
    minWidth: wp("20.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("5.874316939890704%")
  },
  Text_3801_902: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3801_903: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.622950819672127%")
  },
  Text_3801_903: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3801_904: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("19.53551912568306%"),
    minHeight: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%")
  },
  ImageBackground_3801_905: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("14.0419235646399%"),
    minHeight: hp("14.0419235646399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 6.426229476928711,
    borderTopRightRadius: 6.426229476928711,
    borderBottomLeftRadius: 6.426229476928711,
    borderBottomRightRadius: 6.426229476928711
  },
  View_3801_906: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.622950819672127%")
  },
  Text_3801_906: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3801_907: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.300546448087431%")
  },
  Text_3801_907: {
    color: "rgba(89, 89, 89, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3801_908: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("19.53551912568306%"),
    minHeight: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("0%")
  },
  ImageBackground_3801_909: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("14.0419235646399%"),
    minHeight: hp("14.0419235646399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 6.426229476928711,
    borderTopRightRadius: 6.426229476928711,
    borderBottomLeftRadius: 6.426229476928711,
    borderBottomRightRadius: 6.426229476928711
  },
  View_3801_910: {
    width: wp("17.866666666666667%"),
    minWidth: wp("17.866666666666667%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.622950819672127%")
  },
  Text_3801_910: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3801_911: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.300546448087431%")
  },
  Text_3801_911: {
    color: "rgba(89, 89, 89, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3801_1780: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.674863387978142%"),
    minHeight: hp("8.674863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("90.77868852459017%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3801_1781: {
    width: wp("100%"),
    height: hp("8.469945355191257%"),
    top: hp("0.20491803278687826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3801_1782: {
    width: wp("100%"),
    height: hp("8.469945355191257%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(4, 13, 37, 1)"
  },
  View_3801_1783: {
    width: wp("12.8%"),
    top: hp("2.254098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.533333333333335%")
  },
  Text_3801_1783: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3801_1784: {
    width: wp("36.53333333333333%"),
    top: hp("4.576502732240428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.533333333333335%")
  },
  Text_3801_1784: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3801_1785: {
    width: wp("16.53333333333333%"),
    height: hp("8.469945355191257%"),
    top: hp("0.20491803278687826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3801_1786: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("0.20491803278687826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3801_1787: {
    width: wp("33.33333333333333%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3801_1788: {
    width: wp("8.266666666666666%"),
    height: hp("4.2349726775956285%"),
    top: hp("2.254098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%")
  },
  View_3801_913: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99.31693989071039%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3801_914: {
    width: wp("100%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_3801_915: {
    width: wp("5.072740681966146%"),
    height: hp("2.5956273730335337%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.466666666666665%")
  },
  View_3801_918: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("6.83060109289616%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3801_919: {
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
  ImageBackground_3801_920: {
    width: wp("9.066666666666666%"),
    height: hp("4.644808743169399%"),
    top: hp("0.9562841530054556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.6%")
  },
  View_3801_922: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.66666666666667%"),
    top: hp("1.3661202185792405%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_3801_923: {
    width: wp("5.4433441162109375%"),
    height: hp("3.526227721751062%"),
    top: hp("0.07002366696548279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8785156249999915%")
  },
  View_3801_926: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_3801_927: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3801_928: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333286%"),
    top: hp("0.8196721311475414%")
  },
  Text_3801_928: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3801_929: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.6%"),
    top: hp("5.601092896174862%")
  },
  Text_3801_929: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_3801_930: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666666%"),
    top: hp("5.601092896174862%")
  },
  Text_3801_930: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_3801_931: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.8%"),
    top: hp("5.601092896174862%")
  },
  Text_3801_931: {
    color: "rgba(66, 157, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_3801_932: {
    width: wp("70.66666666666667%"),
    minWidth: wp("70.66666666666667%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("36.6120218579235%")
  },
  View_3801_933: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3801_934: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(189, 220, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3801_935: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("0.8196721311475414%")
  },
  Text_3801_935: {
    color: "rgba(66, 157, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3801_936: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.46666666666667%"),
    top: hp("0%")
  },
  View_3801_937: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(66, 157, 255, 1)",
    borderColor: "rgba(66, 157, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3801_938: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.93333333333333%"),
    top: hp("0.9562841530054556%")
  },
  Text_3801_938: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3801_939: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.93333333333333%"),
    top: hp("0%")
  },
  View_3801_940: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(189, 220, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3801_941: {
    width: wp("20.8%"),
    minWidth: wp("20.8%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4666666666666686%"),
    top: hp("0.8196721311475414%")
  },
  Text_3801_941: {
    color: "rgba(66, 157, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3801_942: {
    width: wp("9.333333333333334%"),
    height: hp("4.781420765027322%"),
    top: hp("77.8688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.33333333333333%")
  },
  ImageBackground_3801_943: {
    width: wp("9.333333333333334%"),
    height: hp("4.781420765027322%"),
    top: hp("77.8688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.06666666666668%")
  },
  View_3801_944: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("25.273224043715846%"),
    minHeight: hp("25.273224043715846%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41.939890710382514%")
  },
  View_3801_945: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("25.273224043715846%"),
    minHeight: hp("25.273224043715846%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3801_946: {
    width: wp("94.66666666666667%"),
    minWidth: wp("94.66666666666667%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("1.639344262295083%")
  },
  View_3801_947: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3801_947: {
    color: "rgba(70, 68, 68, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3801_948: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.333333333333333%"),
    top: hp("3.5519125683060153%")
  },
  View_3801_949: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3801_950: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("14.0419235646399%"),
    minHeight: hp("14.0419235646399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 6.426229476928711,
    borderTopRightRadius: 6.426229476928711,
    borderBottomLeftRadius: 6.426229476928711,
    borderBottomRightRadius: 6.426229476928711
  },
  View_3801_951: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.89071038251366%")
  },
  Text_3801_951: {
    color: "rgba(89, 89, 89, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3801_952: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.21311475409835%")
  },
  Text_3801_952: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3801_953: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%")
  },
  ImageBackground_3801_954: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("14.0419235646399%"),
    minHeight: hp("14.0419235646399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 6.426229476928711,
    borderTopRightRadius: 6.426229476928711,
    borderBottomLeftRadius: 6.426229476928711,
    borderBottomRightRadius: 6.426229476928711
  },
  View_3801_955: {
    width: wp("25.866666666666667%"),
    minWidth: wp("25.866666666666667%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.21311475409835%")
  },
  Text_3801_955: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3801_956: {
    width: wp("19.733333333333334%"),
    minWidth: wp("19.733333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.89071038251366%")
  },
  Text_3801_956: {
    color: "rgba(89, 89, 89, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3801_957: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("0%")
  },
  ImageBackground_3801_958: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("14.0419235646399%"),
    minHeight: hp("14.0419235646399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 6.426229476928711,
    borderTopRightRadius: 6.426229476928711,
    borderBottomLeftRadius: 6.426229476928711,
    borderBottomRightRadius: 6.426229476928711
  },
  View_3801_959: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.21311475409835%")
  },
  Text_3801_959: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3801_960: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.89071038251366%")
  },
  Text_3801_960: {
    color: "rgba(89, 89, 89, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3801_961: {
    width: wp("9.333333333333334%"),
    height: hp("4.781420765027322%"),
    top: hp("9.699453551912569%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.600000000000001%")
  },
  ImageBackground_3801_962: {
    width: wp("9.333333333333334%"),
    height: hp("4.781420765027322%"),
    top: hp("9.699453551912569%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.33333333333333%")
  },
  ImageBackground_3801_963: {
    width: wp("9.333333333333334%"),
    height: hp("4.781420765027322%"),
    top: hp("9.699453551912569%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.06666666666668%")
  },
  View_3801_2168: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.46666666666667%"),
    top: hp("29.78142076502732%")
  },
  ImageBackground_3801_2169: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3801_2170: {
    width: wp("4.960009765625%"),
    height: hp("2.258701532916293%"),
    top: hp("1.5300479742998654%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3466145833333343%")
  },
  View_3801_2171: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.66666666666667%"),
    top: hp("29.78142076502732%")
  },
  ImageBackground_3801_2172: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3801_2173: {
    width: wp("4%"),
    height: hp("2.2352372362314026%"),
    top: hp("1.403324981856219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333337%")
  },
  View_3861_2628: {
    width: wp("8.266666666666666%"),
    minWidth: wp("8.266666666666666%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("7.650273224043716%")
  },
  ImageBackground_3861_2629: {
    width: wp("8.266666666666666%"),
    minWidth: wp("8.266666666666666%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3861_2630: {
    width: wp("2.053333282470703%"),
    height: hp("1.912568306010929%"),
    top: hp("1.2295081967213113%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8398437500000004%")
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
