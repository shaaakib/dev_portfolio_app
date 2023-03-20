import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  useWindowDimensions,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import { colors } from '../theme/colors';
import RNText from '../components/text/Text';
import { metrics } from '../theme/metrics';
import { images } from '../theme/images';
import SafeViewAndroid from '../components/SafeViewAndroid ';
import Button from '../components/button/Button';
import Divider from '../components/divider/Divider';
import Skill from '../components/skills/Skill';
import Project from '../components/project/Project';
import Input from '../components/input/Input';

const skills = [
  {
    title: 'HTML',
    subtitle: '4 years experience',
  },
  {
    title: 'CSS',
    subtitle: '2 years experience',
  },
  {
    title: 'Javascript',
    subtitle: '3 years experience',
  },
  {
    title: 'Accessibility',
    subtitle: '5 years experience',
  },
  {
    title: 'React',
    subtitle: '1 years experience',
  },
  {
    title: 'Sass',
    subtitle: '3 years experience',
  },
];

const projects = [
  {
    title: 'DESIGN PORTFOLIO',
    languages: ['HTML', 'CSS', 'JAVASCRIPT'],
    image: images.project_1,
    sourceCodeLink: 'https://www.google.com/',
    projectLink: 'https://www.google.com/',
  },
  {
    title: 'E-LEARNING LANDING PAGE',
    languages: ['HTML', 'CSS', 'JAVASCRIPT'],
    image: images.project_2,
    sourceCodeLink: 'https://www.google.com/',
    projectLink: 'https://www.google.com/',
  },
  {
    title: 'TODO WEB APP',
    languages: ['HTML', 'CSS', 'JAVASCRIPT'],
    image: images.project_3,
    sourceCodeLink: 'https://www.google.com/',
    projectLink: 'https://www.google.com/',
  },
  {
    title: 'ENTERTAINMENT WEB APP',
    languages: ['HTML', 'CSS', 'JAVASCRIPT'],
    image: images.project_4,
    sourceCodeLink: 'https://www.google.com/',
    projectLink: 'https://www.google.com/',
  },
  {
    title: 'MEMORY GAME',
    languages: ['HTML', 'CSS', 'JAVASCRIPT'],
    image: images.project_5,
    sourceCodeLink: 'https://www.google.com/',
    projectLink: 'https://www.google.com/',
  },
];

export default function PersonalPortfolio() {
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <ScrollView>
        <View>
          <View
            style={{
              alignSelf: 'center',
              width: width / 2,
            }}
          >
            <RNText
              customStyles={{
                textAlign: 'center',
              }}
              preset="headingLarge"
            >
              adamkeyes
            </RNText>
            {/* iconsImage */}
            <View style={styles.iconsImage}>
              <Image source={images.github} />
              <Image source={images.linkedin} />
              <Image source={images.frontendmentor} />
              <Image source={images.twitter} />
            </View>
            {/* Developer  */}
            <View style={styles.developer}>
              <Image source={images.developer} />
            </View>
          </View>
          {/* GROUP  */}
          <View style={styles.group}>
            <Image source={images.group} />
          </View>
          {/* CIRCLE  */}
          <View style={styles.circle}></View>
          {/* ABOUT  */}
          <View style={styles.about}>
            <RNText preset="headingXl" customStyles={styles.aboutTitle}>
              Nice to meet you! I’m {''}
            </RNText>
            <RNText preset="headingXl" customStyles={styles.titleName}>
              Adam Keyes
            </RNText>
            <RNText customStyles={styles.desc}>
              Based in the UK, I’m a front-end developer passionate about
              building accessible web apps that users love.
            </RNText>

            <Button title="Contact me" customStyles={styles.button} />
          </View>
          <Divider customStyles={styles.divider} />
          {/* SKILL  */}
          <View style={{ alignItems: 'center' }}>
            {skills.map((skill, index) => (
              <Skill
                key={skill.title}
                title={skill.title}
                subtitle={skill.subtitle}
              />
            ))}
          </View>
        </View>
        <View>
          <Divider
            customStyles={{
              marginHorizontal: metrics.spacing.m,
              marginVertical: metrics.spacing.xxl,
            }}
          />
          <View
            style={{
              position: 'absolute',
              top: -20,
              right: 0,
              zIndex: -1,
            }}
          >
            <Image source={images.groupRight} />
          </View>
        </View>
        {/* PROJECTS */}
        <View
          style={{
            marginHorizontal: metrics.spacing.m,
            marginVertical: metrics.spacing.xxl,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <RNText preset="headingXl">Projects</RNText>
            <Button title="Contact me" />
          </View>

          {projects.map(
            (
              { title, image, languages, projectLink, sourceCodeLink },
              index
            ) => (
              <Project
                key={title}
                title={title}
                image={image}
                languages={languages}
                projectLink={projectLink}
                sourceCodeLink={sourceCodeLink}
              />
            )
          )}
        </View>
        <View
          style={{
            backgroundColor: colors.darkGrey,
            paddingVertical: metrics.spacing.xxl,
            paddingHorizontal: metrics.spacing.m,
          }}
        >
          <RNText preset="headingXl">Contact</RNText>
          <RNText customStyles={{ paddingTop: metrics.spacing.s }}>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </RNText>

          <View style={{ paddingTop: metrics.spacing.xl }}>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Input
              placeholder="Message"
              customStyles={{
                height: 120,
              }}
            />
            <Button
              title="send message"
              customStyles={{
                alignSelf: 'flex-end',
                marginTop: metrics.spacing.l,
              }}
            />
            <View>
              <Divider customStyles={{ marginVertical: metrics.spacing.xxl }} />

              <View
                style={{
                  position: 'absolute',
                  left: -20,
                  top: -100,
                  zIndex: -1,
                }}
              >
                <Image source={images.group} />
              </View>
            </View>

            <View style={{ width: width - 200, alignSelf: 'center' }}>
              <RNText
                customStyles={{
                  textAlign: 'center',
                }}
                preset="headingLarge"
              >
                adamkeyes
              </RNText>

              {/* Icons */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: metrics.spacing.m,
                  justifyContent: 'space-around',
                }}
              >
                <Image source={images.github} />
                <Image source={images.linkedin} />
                <Image source={images.frontendmentor} />
                <Image source={images.twitter} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  iconsImage: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: metrics.spacing.m,
    justifyContent: 'space-evenly',
  },
  developer: {
    marginTop: metrics.spacing.xxxl,
    alignSelf: 'center',
  },
  group: {
    position: 'absolute',
    left: 0,
    top: 120,
    zIndex: -1,
  },
  circle: {
    position: 'absolute',
    right: 0,
    height: 120,
    width: 120,
    borderRadius: 60,
    borderColor: colors.white,
    borderWidth: 1,
    top: 260,
    marginRight: -60,
  },
  about: {
    marginHorizontal: metrics.spacing.m,
    marginVertical: metrics.spacing.xxl,
  },
  aboutTitle: {
    textAlign: 'center',
  },
  titleName: {
    borderBottomWidth: 1,
    borderBottomColor: colors.green,
    alignSelf: 'center',
  },
  desc: {
    textAlign: 'center',
    paddingTop: metrics.spacing.l,
  },
  button: {
    marginVertical: metrics.spacing.xxl,
    alignSelf: 'center',
  },
  divider: {
    marginHorizontal: metrics.spacing.m,
  },
  project_title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: metrics.spacing.m,
  },
});
