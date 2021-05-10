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
      <View style={styles.View_1115_596}>
        <View style={styles.View_1115_597} />
      </View>
      <View style={styles.View_1115_598}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/701b/e25a/ff00eca9196f117f3830b0fe2d9a4788"
          }}
          style={styles.ImageBackground_1115_599}
        />
      </View>
      <View style={styles.View_1115_600}>
        <View style={styles.View_1115_601} />
        <View style={styles.View_1115_602}>
          <View style={styles.View_1115_603}>
            <Text style={styles.Text_1115_603}>Nancy Jones</Text>
          </View>
          <View style={styles.View_1115_604}>
            <Text style={styles.Text_1115_604}>Indie Artist Vocalist</Text>
          </View>
          <View style={styles.View_1115_605}>
            <Text style={styles.Text_1115_605}>collaboration</Text>
          </View>
          <View style={styles.View_1131_37}>
            <Text style={styles.Text_1131_37}>Bellevue, WA</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0d2/6b09/a62dda0912cf19f9144082027a3585f1"
            }}
            style={styles.ImageBackground_1115_607}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54d4/0887/cc47b063eb6efbaa6d4a4fb552eeaa4e"
            }}
            style={styles.ImageBackground_1115_608}
          />
        </View>
      </View>
      <View style={styles.View_1115_609}>
        <View style={styles.View_1115_610} />
        <View style={styles.View_1115_611}>
          <View style={styles.View_1115_612}>
            <Text style={styles.Text_1115_612}>Ted Williams</Text>
          </View>
          <View style={styles.View_1115_613}>
            <Text style={styles.Text_1115_613}>Guitarist</Text>
          </View>
          <View style={styles.View_1115_614}>
            <Text style={styles.Text_1115_614}>collaboration</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4deb/5346/3c4875e4be41331e769600768b886aa3"
            }}
            style={styles.ImageBackground_1115_616}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54d4/0887/cc47b063eb6efbaa6d4a4fb552eeaa4e"
            }}
            style={styles.ImageBackground_1115_617}
          />
          <View style={styles.View_1131_38}>
            <Text style={styles.Text_1131_38}>Bellevue, WA</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1115_618}>
        <View style={styles.View_1115_619} />
        <View style={styles.View_1115_620}>
          <View style={styles.View_1115_621}>
            <Text style={styles.Text_1115_621}>Wilson Maxwell</Text>
          </View>
          <View style={styles.View_1115_622}>
            <Text style={styles.Text_1115_622}>Saxophonist</Text>
          </View>
          <View style={styles.View_1115_623}>
            <Text style={styles.Text_1115_623}>collaboration</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36b7/49e6/5e8c0d87ab87e96e463fd207068f5859"
            }}
            style={styles.ImageBackground_1115_625}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/174d/2f1c/e50e279b7400e4ac9a8f89df2e9f96c9"
            }}
            style={styles.ImageBackground_1115_626}
          />
        </View>
      </View>
      <View style={styles.View_1115_627}>
        <View style={styles.View_1115_628} />
        <View style={styles.View_1115_629}>
          <View style={styles.View_1115_630}>
            <Text style={styles.Text_1115_630}>Doreend Ketchens</Text>
          </View>
          <View style={styles.View_1115_631}>
            <Text style={styles.Text_1115_631}>Clarinetist</Text>
          </View>
          <View style={styles.View_1115_632}>
            <Text style={styles.Text_1115_632}>collaboration</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24ef/d86f/4ee1291fa31723879b123d75ad6e686c"
            }}
            style={styles.ImageBackground_1115_634}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/174d/2f1c/e50e279b7400e4ac9a8f89df2e9f96c9"
            }}
            style={styles.ImageBackground_1115_635}
          />
        </View>
      </View>
      <View style={styles.View_1115_636}>
        <View style={styles.View_1115_637} />
        <View style={styles.View_1115_638}>
          <View style={styles.View_1115_639}>
            <Text style={styles.Text_1115_639}>Christopher Place</Text>
          </View>
          <View style={styles.View_1115_640}>
            <Text style={styles.Text_1115_640}>Pianist</Text>
          </View>
          <View style={styles.View_1115_641}>
            <Text style={styles.Text_1115_641}>collaboration</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21e7/48ce/1fe1527043003b15801c2a8f6836ca14"
            }}
            style={styles.ImageBackground_1115_643}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76c0/1a8a/fe0f4f3bd1cb4f816ba02744977a531e"
            }}
            style={styles.ImageBackground_1115_644}
          />
        </View>
      </View>
      <View style={styles.View_1115_645}>
        <View style={styles.View_1115_646} />
        <View style={styles.View_1115_647}>
          <View style={styles.View_1115_648}>
            <Text style={styles.Text_1115_648}>Arthur Parker</Text>
          </View>
          <View style={styles.View_1115_649}>
            <Text style={styles.Text_1115_649}>Violinist</Text>
          </View>
          <View style={styles.View_1115_650}>
            <Text style={styles.Text_1115_650}>collaboration</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdcf/db87/a42668d4b39895b6d83a837fa9543b78"
            }}
            style={styles.ImageBackground_1115_652}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8859/345b/b33151202c4c51765cdefd2eee52cf62"
            }}
            style={styles.ImageBackground_1115_653}
          />
        </View>
      </View>
      <View style={styles.View_1115_654}>
        <View style={styles.View_1115_655} />
        <View style={styles.View_1115_656}>
          <View style={styles.View_1115_657}>
            <Text style={styles.Text_1115_657}>Arthur Parker</Text>
          </View>
          <View style={styles.View_1115_658}>
            <Text style={styles.Text_1115_658}>Violinist</Text>
          </View>
          <View style={styles.View_1115_659}>
            <Text style={styles.Text_1115_659}>collaboration</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdcf/db87/a42668d4b39895b6d83a837fa9543b78"
            }}
            style={styles.ImageBackground_1115_661}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76c0/1a8a/fe0f4f3bd1cb4f816ba02744977a531e"
            }}
            style={styles.ImageBackground_1115_662}
          />
        </View>
      </View>
      <View style={styles.View_1115_663}>
        <View style={styles.View_1115_664} />
        <View style={styles.View_1115_665}>
          <View style={styles.View_1115_666}>
            <Text style={styles.Text_1115_666}>Arthur Parker</Text>
          </View>
          <View style={styles.View_1115_667}>
            <Text style={styles.Text_1115_667}>Violinist</Text>
          </View>
          <View style={styles.View_1115_668}>
            <Text style={styles.Text_1115_668}>collaboration</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdcf/db87/a42668d4b39895b6d83a837fa9543b78"
            }}
            style={styles.ImageBackground_1115_670}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76c0/1a8a/fe0f4f3bd1cb4f816ba02744977a531e"
            }}
            style={styles.ImageBackground_1115_671}
          />
        </View>
      </View>
      <View style={styles.View_1115_672}>
        <View style={styles.View_1115_673} />
        <View style={styles.View_1115_674}>
          <View style={styles.View_1115_675}>
            <Text style={styles.Text_1115_675}>Arthur Parker</Text>
          </View>
          <View style={styles.View_1115_676}>
            <Text style={styles.Text_1115_676}>Violinist</Text>
          </View>
          <View style={styles.View_1115_677}>
            <Text style={styles.Text_1115_677}>collaboration</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdcf/db87/a42668d4b39895b6d83a837fa9543b78"
            }}
            style={styles.ImageBackground_1115_679}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76c0/1a8a/fe0f4f3bd1cb4f816ba02744977a531e"
            }}
            style={styles.ImageBackground_1115_680}
          />
        </View>
      </View>
      <View style={styles.View_1115_681}>
        <View style={styles.View_1115_682}>
          <View style={styles.View_1115_683} />
        </View>
      </View>
      <View style={styles.View_1115_684}>
        <View style={styles.View_1115_685} />
        <View style={styles.View_1115_686} />
        <View style={styles.View_1115_687} />
        <View style={styles.View_1115_688} />
      </View>
      <View style={styles.View_1115_689}>
        <Text style={styles.Text_1115_689}>Collabor</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1091/91c2/30358ac5cd48a2fff3e8844d13d99da6"
        }}
        style={styles.ImageBackground_1115_690}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc21/f4d9/be8c67c265e5597161b3209f9f8ec951"
        }}
        style={styles.ImageBackground_1115_691}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfad/c9bb/8b2c4b62c69ee3ff0208fa0fff059073"
        }}
        style={styles.ImageBackground_1115_692}
      />
      <View style={styles.View_1115_693}>
        <View style={styles.View_I1115_693_1109_693} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eada/a7b2/45c7113afde4eacf05d838c56d148d33"
          }}
          style={styles.ImageBackground_I1115_693_1109_694}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/184c/bffe/76046f5c07644fde28ced03009f531f9"
          }}
          style={styles.ImageBackground_I1115_693_1109_695}
        />
        <View style={styles.View_I1115_693_1109_696}>
          <View style={styles.View_I1115_693_1109_697}>
            <View style={styles.View_I1115_693_1109_698} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I1115_693_1109_699}
            />
            <View style={styles.View_I1115_693_1109_700} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47f5/7015/5868429ee0bb3d36311c149c359f6a6d"
            }}
            style={styles.ImageBackground_I1115_693_1109_701}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69b2/60c6/1cd75741003fc62368cc7053e63fa430"
            }}
            style={styles.ImageBackground_I1115_693_1109_705}
          />
          <View style={styles.View_I1115_693_1109_710}>
            <View style={styles.View_I1115_693_1109_711}>
              <Text style={styles.Text_I1115_693_1109_711}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1115_712}>
        <Text style={styles.Text_1115_712}>15 Results</Text>
      </View>
      <View style={styles.View_1115_722}>
        <View style={styles.View_I1115_722_1109_851} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0309/affb/ad762870bba8ad59108f35df8eb08c58"
          }}
          style={styles.ImageBackground_I1115_722_1109_852}
        />
        <View style={styles.View_I1115_722_1109_855}>
          <View style={styles.View_I1115_722_1109_856} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ed2/ac90/f6cf859cc7698d90ba1a85f769016601"
          }}
          style={styles.ImageBackground_I1115_722_1109_857}
        />
        <View style={styles.View_I1115_722_1109_859}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2a3/8219/0d0a44681ad90f675e710b885a461c6c"
            }}
            style={styles.ImageBackground_I1115_722_1109_860}
          />
        </View>
        <View style={styles.View_I1115_722_1109_831}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b54/3b33/4b13d515d4e3b8839fa786c1ab4dcbd0"
            }}
            style={styles.ImageBackground_I1115_722_1109_832}
          />
          <View style={styles.View_I1115_722_1109_833}>
            <Text style={styles.Text_I1115_722_1109_833}>14</Text>
          </View>
        </View>
        <View style={styles.View_I1115_722_1109_863}>
          <Text style={styles.Text_I1115_722_1109_863}>Alerts</Text>
        </View>
        <View style={styles.View_I1115_722_1109_864}>
          <Text style={styles.Text_I1115_722_1109_864}>Message</Text>
        </View>
        <View style={styles.View_I1115_722_1109_865}>
          <Text style={styles.Text_I1115_722_1109_865}>Search</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1115_596: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("99.18032786885246%"),
    minHeight: hp("99.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666666666%"),
    top: hp("11.612021857923498%")
  },
  View_1115_597: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("99.18032786885246%"),
    minHeight: hp("99.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 240, 240, 1)"
  },
  View_1115_598: {
    width: wp("100%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1115_599: {
    width: wp("100%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1115_600: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27.595628415300546%")
  },
  View_1115_601: {
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
  View_1115_602: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.0928961748633874%")
  },
  View_1115_603: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333335%"),
    top: hp("0.4098360655737707%")
  },
  Text_1115_603: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1115_604: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333335%"),
    top: hp("2.595628415300549%")
  },
  Text_1115_604: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1115_605: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.8%"),
    top: hp("2.595628415300549%")
  },
  Text_1115_605: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1131_37: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.46666666666667%"),
    top: hp("0.4098360655737707%")
  },
  Text_1131_37: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_1115_607: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1115_608: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999997%"),
    top: hp("0.4098360655737707%")
  },
  View_1115_609: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.92896174863388%")
  },
  View_1115_610: {
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
  View_1115_611: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.092896174863391%")
  },
  View_1115_612: {
    width: wp("22.133333333333333%"),
    minWidth: wp("22.133333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333335%"),
    top: hp("0.4098360655737707%")
  },
  Text_1115_612: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1115_613: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333335%"),
    top: hp("2.5956284153005384%")
  },
  Text_1115_613: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1115_614: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.8%"),
    top: hp("2.5956284153005384%")
  },
  Text_1115_614: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_1115_616: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1115_617: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999997%"),
    top: hp("0.4098360655737707%")
  },
  View_1131_38: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.46666666666667%"),
    top: hp("0.4098360655737707%")
  },
  Text_1131_38: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1115_618: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.26229508196721%")
  },
  View_1115_619: {
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
  View_1115_620: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.092896174863391%")
  },
  View_1115_621: {
    width: wp("26.93333333333333%"),
    minWidth: wp("26.93333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333335%"),
    top: hp("0.4098360655737707%")
  },
  Text_1115_621: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1115_622: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333335%"),
    top: hp("2.5956284153005456%")
  },
  Text_1115_622: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1115_623: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.8%"),
    top: hp("2.5956284153005456%")
  },
  Text_1115_623: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_1115_625: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1115_626: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999997%"),
    top: hp("0.4098360655737707%")
  },
  View_1115_627: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("52.595628415300546%")
  },
  View_1115_628: {
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
  View_1115_629: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.092896174863391%")
  },
  View_1115_630: {
    width: wp("32.266666666666666%"),
    minWidth: wp("32.266666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333335%"),
    top: hp("0.4098360655737707%")
  },
  Text_1115_630: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1115_631: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333335%"),
    top: hp("2.5956284153005384%")
  },
  Text_1115_631: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1115_632: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.8%"),
    top: hp("2.5956284153005384%")
  },
  Text_1115_632: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_1115_634: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1115_635: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999997%"),
    top: hp("0.4098360655737707%")
  },
  View_1115_636: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60.92896174863388%")
  },
  View_1115_637: {
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
  View_1115_638: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.092896174863391%")
  },
  View_1115_639: {
    width: wp("31.2%"),
    minWidth: wp("31.2%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333335%"),
    top: hp("0.4098360655737636%")
  },
  Text_1115_639: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1115_640: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333335%"),
    top: hp("2.5956284153005456%")
  },
  Text_1115_640: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1115_641: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.8%"),
    top: hp("2.5956284153005456%")
  },
  Text_1115_641: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_1115_643: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1115_644: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999997%"),
    top: hp("0.4098360655737636%")
  },
  View_1115_645: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("69.26229508196722%")
  },
  View_1115_646: {
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
  View_1115_647: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.0928961748633697%")
  },
  View_1115_648: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333335%"),
    top: hp("0.40983606557378494%")
  },
  Text_1115_648: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1115_649: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333335%"),
    top: hp("2.5956284153005527%")
  },
  Text_1115_649: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1115_650: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.8%"),
    top: hp("2.5956284153005527%")
  },
  Text_1115_650: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_1115_652: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1115_653: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999997%"),
    top: hp("0.40983606557378494%")
  },
  View_1115_654: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("77.59562841530054%")
  },
  View_1115_655: {
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
  View_1115_656: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.092896174863398%")
  },
  View_1115_657: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333335%"),
    top: hp("0.4098360655737707%")
  },
  Text_1115_657: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1115_658: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333335%"),
    top: hp("2.5956284153005384%")
  },
  Text_1115_658: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1115_659: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.8%"),
    top: hp("2.5956284153005384%")
  },
  Text_1115_659: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_1115_661: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1115_662: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999997%"),
    top: hp("0.4098360655737707%")
  },
  View_1115_663: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("85.92896174863388%")
  },
  View_1115_664: {
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
  View_1115_665: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.0928961748633839%")
  },
  View_1115_666: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333335%"),
    top: hp("0.4098360655737707%")
  },
  Text_1115_666: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1115_667: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333335%"),
    top: hp("2.5956284153005527%")
  },
  Text_1115_667: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1115_668: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.8%"),
    top: hp("2.5956284153005527%")
  },
  Text_1115_668: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_1115_670: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1115_671: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999997%"),
    top: hp("0.4098360655737707%")
  },
  View_1115_672: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("94.26229508196722%")
  },
  View_1115_673: {
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
  View_1115_674: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.0928961748633697%")
  },
  View_1115_675: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333335%"),
    top: hp("0.40983606557378494%")
  },
  Text_1115_675: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1115_676: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333335%"),
    top: hp("2.5956284153005527%")
  },
  Text_1115_676: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1115_677: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.8%"),
    top: hp("2.5956284153005527%")
  },
  Text_1115_677: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_1115_679: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1115_680: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999997%"),
    top: hp("0.40983606557378494%")
  },
  View_1115_681: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("6.5383150277893405%"),
    minHeight: hp("6.5383150277893405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("14.207650273224044%")
  },
  View_1115_682: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("6.5383150277893405%"),
    minHeight: hp("6.5383150277893405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1115_683: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("6.5383150277893405%"),
    minHeight: hp("6.5383150277893405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(230, 230, 230, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 7.976744174957275,
    borderTopRightRadius: 7.976744174957275,
    borderBottomLeftRadius: 7.976744174957275,
    borderBottomRightRadius: 7.976744174957275
  },
  View_1115_684: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("16.256830601092894%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1115_685: {
    width: wp("2.16774164835612%"),
    minWidth: wp("2.16774164835612%"),
    height: hp("1.11052338542834%"),
    minHeight: hp("1.11052338542834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 1.1612904071807861,
    borderTopRightRadius: 1.1612904071807861,
    borderBottomLeftRadius: 1.1612904071807861,
    borderBottomRightRadius: 1.1612904071807861
  },
  View_1115_686: {
    width: wp("2.16774164835612%"),
    minWidth: wp("2.16774164835612%"),
    height: hp("1.11052338542834%"),
    minHeight: hp("1.11052338542834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.632552083333323%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 1.1612904071807861,
    borderTopRightRadius: 1.1612904071807861,
    borderBottomLeftRadius: 1.1612904071807861,
    borderBottomRightRadius: 1.1612904071807861
  },
  View_1115_687: {
    width: wp("2.16774164835612%"),
    minWidth: wp("2.16774164835612%"),
    height: hp("1.11052338542834%"),
    minHeight: hp("1.11052338542834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3486101327698101%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 1.1612904071807861,
    borderTopRightRadius: 1.1612904071807861,
    borderBottomLeftRadius: 1.1612904071807861,
    borderBottomRightRadius: 1.1612904071807861
  },
  View_1115_688: {
    width: wp("2.16774164835612%"),
    minWidth: wp("2.16774164835612%"),
    height: hp("1.11052338542834%"),
    minHeight: hp("1.11052338542834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.632552083333323%"),
    top: hp("1.3486101327698101%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 1.1612904071807861,
    borderTopRightRadius: 1.1612904071807861,
    borderBottomLeftRadius: 1.1612904071807861,
    borderBottomRightRadius: 1.1612904071807861
  },
  View_1115_689: {
    width: wp("14.15637919108073%"),
    minWidth: wp("14.15637919108073%"),
    minHeight: hp("3.069410688890134%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.133333333333335%"),
    top: hp("15.983606557377051%")
  },
  Text_1115_689: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_1115_690: {
    width: wp("2.0981484946484365e-7%"),
    minWidth: wp("2.0981484946484365e-7%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.360677083333332%"),
    top: hp("16.120218579234972%")
  },
  ImageBackground_1115_691: {
    width: wp("2.666666666666667%"),
    height: hp("2.3224043715846996%"),
    top: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_1115_692: {
    width: wp("14.399999999999999%"),
    height: hp("3.547538694788198%"),
    top: hp("5.8669793801229515%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    resizeMode: "cover"
  },
  View_1115_693: {
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
  View_I1115_693_1109_693: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1115_693_1109_694: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.967213114754098%"),
    resizeMode: "cover"
  },
  ImageBackground_I1115_693_1109_695: {
    flexGrow: 1,
    width: wp("9.866666666666667%"),
    height: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.13333333333333%"),
    top: hp("5.8743169398907105%")
  },
  View_I1115_693_1109_696: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1115_693_1109_697: {
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
  View_I1115_693_1109_698: {
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
  ImageBackground_I1115_693_1109_699: {
    width: wp("0.3541434605916341%"),
    minWidth: wp("0.3541434605916341%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.13333333333334%"),
    top: hp("0.5009218643271862%")
  },
  View_I1115_693_1109_700: {
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
  ImageBackground_I1115_693_1109_701: {
    width: wp("4.088883463541667%"),
    height: hp("1.434424666107678%"),
    top: hp("2.1295933124146176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%")
  },
  ImageBackground_I1115_693_1109_705: {
    width: wp("4.533333333333333%"),
    height: hp("1.3909608288540867%"),
    top: hp("2.173418555754781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%")
  },
  View_I1115_693_1109_710: {
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
  View_I1115_693_1109_711: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054644%")
  },
  Text_I1115_693_1109_711: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_1115_712: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("22.6775956284153%")
  },
  Text_1115_712: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1115_722: {
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
  View_I1115_722_1109_851: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1115_722_1109_852: {
    flexGrow: 1,
    width: wp("5.072740681966146%"),
    height: hp("2.5956273730335337%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.466666666666665%"),
    top: hp("2.1857923497267677%")
  },
  View_I1115_722_1109_855: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.83060109289616%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1115_722_1109_856: {
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
  ImageBackground_I1115_722_1109_857: {
    flexGrow: 1,
    width: wp("9.066666666666666%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.6%"),
    top: hp("0.9562841530054556%")
  },
  View_I1115_722_1109_859: {
    flexGrow: 1,
    width: wp("7.199999999999999%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.66666666666667%"),
    top: hp("1.3661202185792405%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1115_722_1109_860: {
    width: wp("5.4433441162109375%"),
    height: hp("3.526227721751062%"),
    top: hp("0.07004034323769304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.87838541666666%")
  },
  View_I1115_722_1109_831: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_I1115_722_1109_832: {
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
  View_I1115_722_1109_833: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333286%"),
    top: hp("0.8196721311475414%")
  },
  Text_I1115_722_1109_833: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1115_722_1109_863: {
    flexGrow: 1,
    width: wp("9.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.6%"),
    top: hp("5.601092896174862%")
  },
  Text_I1115_722_1109_863: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_I1115_722_1109_864: {
    flexGrow: 1,
    width: wp("13.600000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666666%"),
    top: hp("5.601092896174862%")
  },
  Text_I1115_722_1109_864: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_I1115_722_1109_865: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.8%"),
    top: hp("5.601092896174862%")
  },
  Text_I1115_722_1109_865: {
    color: "rgba(66, 157, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
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
