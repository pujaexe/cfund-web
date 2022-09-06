// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: CK5Roq2dBGcRPqc72xPE7
// Component: IbDhUVEhV3
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

import { useScreenVariants as useScreenVariants_68So83ItnbSuT } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 68So83itnbSuT/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_cfund_landing_page.module.css"; // plasmic-import: CK5Roq2dBGcRPqc72xPE7/projectcss
import sty from "./PlasmicFeeSection.module.css"; // plasmic-import: IbDhUVEhV3/css

export type PlasmicFeeSection__VariantMembers = {};

export type PlasmicFeeSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicFeeSection__VariantsArgs;
export const PlasmicFeeSection__VariantProps = new Array<VariantPropType>();

export type PlasmicFeeSection__ArgsType = {};
type ArgPropType = keyof PlasmicFeeSection__ArgsType;
export const PlasmicFeeSection__ArgProps = new Array<ArgPropType>();

export type PlasmicFeeSection__OverridesType = {
  root?: p.Flex<"section">;
  feeContainer?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  text?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultFeeSectionProps {
  className?: string;
}

function PlasmicFeeSection__RenderFunc(props: {
  variants: PlasmicFeeSection__VariantsArgs;
  args: PlasmicFeeSection__ArgsType;
  overrides: PlasmicFeeSection__OverridesType;

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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_68So83ItnbSuT()
  });

  return (
    <section
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
      <p.Stack
        as={"div"}
        data-plasmic-name={"feeContainer"}
        data-plasmic-override={overrides.feeContainer}
        hasGap={true}
        className={classNames(projectcss.all, sty.feeContainer)}
      >
        <div className={classNames(projectcss.all, sty.column___7PrYu)}>
          <h1
            data-plasmic-name={"h1"}
            data-plasmic-override={overrides.h1}
            className={classNames(
              projectcss.all,
              projectcss.h1,
              projectcss.__wab_text,
              sty.h1
            )}
          >
            {"Fee Structure & Terms"}
          </h1>

          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {
              "The fee structure for CFUND portfolio management services consists of 2% management fee, which is deducted from the initial investment value, and 20% performance fee deducted from the profit made during the fund management process. In addition, CFund imposes a locking period for the investor's fund, starting from quarterly basis."
            }
          </div>
        </div>

        <div className={classNames(projectcss.all, sty.column__f4M0W)}>
          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          />
        </div>
      </p.Stack>
    </section>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "feeContainer", "h1", "text", "freeBox"],
  feeContainer: ["feeContainer", "h1", "text", "freeBox"],
  h1: ["h1"],
  text: ["text"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "section";
  feeContainer: "div";
  h1: "h1";
  text: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFeeSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFeeSection__VariantsArgs;
    args?: PlasmicFeeSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFeeSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFeeSection__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicFeeSection__ArgProps,
          internalVariantPropNames: PlasmicFeeSection__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFeeSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFeeSection";
  } else {
    func.displayName = `PlasmicFeeSection.${nodeName}`;
  }
  return func;
}

export const PlasmicFeeSection = Object.assign(
  // Top-level PlasmicFeeSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    feeContainer: makeNodeComponent("feeContainer"),
    h1: makeNodeComponent("h1"),
    text: makeNodeComponent("text"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicFeeSection
    internalVariantProps: PlasmicFeeSection__VariantProps,
    internalArgProps: PlasmicFeeSection__ArgProps
  }
);

export default PlasmicFeeSection;
/* prettier-ignore-end */
