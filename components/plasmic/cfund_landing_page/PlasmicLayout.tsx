// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: CK5Roq2dBGcRPqc72xPE7
// Component: bJWuF2TQjZ
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Navbar from "../../Navbar"; // plasmic-import: kF3SxrRA5T/component
import HeroSection from "../../HeroSection"; // plasmic-import: o4t1y0SSs1/component
import PeformanceSection from "../../PeformanceSection"; // plasmic-import: vt5GMNbvKS/component
import HowtoSection from "../../HowtoSection"; // plasmic-import: yoOdx6-i_B/component
import FeeSection from "../../FeeSection"; // plasmic-import: IbDhUVEhV3/component
import NewsSection from "../../NewsSection"; // plasmic-import: Wd8YFq2Y_h/component
import FaqSection from "../../FaqSection"; // plasmic-import: nzY669KIVI/component
import ContactusSection from "../../ContactusSection"; // plasmic-import: jRkQsk9sE1/component
import Footer from "../../Footer"; // plasmic-import: qVPSIM3pVs/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_cfund_landing_page.module.css"; // plasmic-import: CK5Roq2dBGcRPqc72xPE7/projectcss
import sty from "./PlasmicLayout.module.css"; // plasmic-import: bJWuF2TQjZ/css

export type PlasmicLayout__VariantMembers = {};

export type PlasmicLayout__VariantsArgs = {};
type VariantPropType = keyof PlasmicLayout__VariantsArgs;
export const PlasmicLayout__VariantProps = new Array<VariantPropType>();

export type PlasmicLayout__ArgsType = {};
type ArgPropType = keyof PlasmicLayout__ArgsType;
export const PlasmicLayout__ArgProps = new Array<ArgPropType>();

export type PlasmicLayout__OverridesType = {
  root?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  heroSection?: p.Flex<typeof HeroSection>;
  peformanceSection?: p.Flex<typeof PeformanceSection>;
  howtoSection?: p.Flex<typeof HowtoSection>;
  feeSection?: p.Flex<typeof FeeSection>;
  newsSection?: p.Flex<typeof NewsSection>;
  faqSection?: p.Flex<typeof FaqSection>;
  contactusSection?: p.Flex<typeof ContactusSection>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultLayoutProps {
  className?: string;
}

function PlasmicLayout__RenderFunc(props: {
  variants: PlasmicLayout__VariantsArgs;
  args: PlasmicLayout__ArgsType;
  overrides: PlasmicLayout__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = args;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <Navbar
        data-plasmic-name={"navbar"}
        data-plasmic-override={overrides.navbar}
        className={classNames("__wab_instance", sty.navbar)}
      />

      <HeroSection
        data-plasmic-name={"heroSection"}
        data-plasmic-override={overrides.heroSection}
        className={classNames("__wab_instance", sty.heroSection)}
      />

      <PeformanceSection
        data-plasmic-name={"peformanceSection"}
        data-plasmic-override={overrides.peformanceSection}
        className={classNames("__wab_instance", sty.peformanceSection)}
      />

      <HowtoSection
        data-plasmic-name={"howtoSection"}
        data-plasmic-override={overrides.howtoSection}
        className={classNames("__wab_instance", sty.howtoSection)}
      />

      <FeeSection
        data-plasmic-name={"feeSection"}
        data-plasmic-override={overrides.feeSection}
        className={classNames("__wab_instance", sty.feeSection)}
      />

      <NewsSection
        data-plasmic-name={"newsSection"}
        data-plasmic-override={overrides.newsSection}
        className={classNames("__wab_instance", sty.newsSection)}
      />

      <FaqSection
        data-plasmic-name={"faqSection"}
        data-plasmic-override={overrides.faqSection}
        className={classNames("__wab_instance", sty.faqSection)}
      />

      <ContactusSection
        data-plasmic-name={"contactusSection"}
        data-plasmic-override={overrides.contactusSection}
        className={classNames("__wab_instance", sty.contactusSection)}
      />

      <Footer
        data-plasmic-name={"footer"}
        data-plasmic-override={overrides.footer}
        className={classNames("__wab_instance", sty.footer)}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbar",
    "heroSection",
    "peformanceSection",
    "howtoSection",
    "feeSection",
    "newsSection",
    "faqSection",
    "contactusSection",
    "footer"
  ],
  navbar: ["navbar"],
  heroSection: ["heroSection"],
  peformanceSection: ["peformanceSection"],
  howtoSection: ["howtoSection"],
  feeSection: ["feeSection"],
  newsSection: ["newsSection"],
  faqSection: ["faqSection"],
  contactusSection: ["contactusSection"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  heroSection: typeof HeroSection;
  peformanceSection: typeof PeformanceSection;
  howtoSection: typeof HowtoSection;
  feeSection: typeof FeeSection;
  newsSection: typeof NewsSection;
  faqSection: typeof FaqSection;
  contactusSection: typeof ContactusSection;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLayout__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLayout__VariantsArgs;
    args?: PlasmicLayout__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLayout__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLayout__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicLayout__ArgProps,
          internalVariantPropNames: PlasmicLayout__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicLayout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLayout";
  } else {
    func.displayName = `PlasmicLayout.${nodeName}`;
  }
  return func;
}

export const PlasmicLayout = Object.assign(
  // Top-level PlasmicLayout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    heroSection: makeNodeComponent("heroSection"),
    peformanceSection: makeNodeComponent("peformanceSection"),
    howtoSection: makeNodeComponent("howtoSection"),
    feeSection: makeNodeComponent("feeSection"),
    newsSection: makeNodeComponent("newsSection"),
    faqSection: makeNodeComponent("faqSection"),
    contactusSection: makeNodeComponent("contactusSection"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicLayout
    internalVariantProps: PlasmicLayout__VariantProps,
    internalArgProps: PlasmicLayout__ArgProps
  }
);

export default PlasmicLayout;
/* prettier-ignore-end */